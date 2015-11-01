import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.ArrayList; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class save_motion extends PApplet {



ArrayList<PVector> points;
boolean isDrawing;

public void setup() {
  size(640, 640);

  points = new ArrayList<PVector>();

  background(255);
}

public void draw() {
  if (isDrawing) {
    int x = mouseX;
    int y = mouseY;

    points.add(new PVector(x, y));

    point(x, y);
  }
}

public void mousePressed() {
  isDrawing = true;
}

public void mouseReleased() {
  isDrawing = false;

  savePoints(points);

  background(255);
  points.clear();
}

int count;

public void savePoints(ArrayList<PVector> points) {
  JSONArray data = new JSONArray();

  for (int i = 0; i < points.size(); i++) {
    PVector p = points.get(i);

    JSONObject d = new JSONObject();
    d.setInt("x", (int)p.x);
    d.setInt("y", (int)p.y);

    data.setJSONObject(i, d);
  }

  saveJSONArray(data, ++count + ".json");
}
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "save_motion" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
