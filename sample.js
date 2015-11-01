var DTW = require('./dtw.js');
var Point = require('./point.js');

var ts1 = [new Point(1, 1, 1),
	   new Point(1, 1, 2),
	   new Point(1, 1, 3),
	   new Point(1, 1, 4),
	   new Point(1, 1, 5)];
var ts2 = [new Point(1, 1, 1),
	   new Point(1, 1, 2),
	   new Point(1, 1, 3),
	   new Point(1, 1, 4),
	   new Point(1, 1, 5),
	   new Point(1, 1, 6)];


var d = DTW.distance(ts1, ts2, Point.distance);

console.log(ts1);
console.log(ts2);
console.log(d);
