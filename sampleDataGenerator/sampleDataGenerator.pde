import java.util.ArrayList;

ArrayList<PVector> points;
boolean isDrawing;

void setup() {
  size(640, 640);

  points = new ArrayList<PVector>();

  background(255);
}

void draw() {
  if (isDrawing) {
    int x = mouseX;
    int y = mouseY;

    points.add(new PVector(x, y));

    point(x, y);
  }
}

void mousePressed() {
  isDrawing = true;
}

void mouseReleased() {
  isDrawing = false;

  savePoints(points);

  background(255);
  points.clear();
}

int count;

void savePoints(ArrayList<PVector> points) {
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
