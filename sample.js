var DTW = require('./dtw.js');

var Point = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

function distance(p1, p2) {
    var x = Math.pow(p1.x - p2.x, 2);
    var y = Math.pow(p1.y - p2.y, 2);
    var z = Math.pow(p1.z - p2.z, 2);
    var d = Math.sqrt(x + y + z);
    return d;
};


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

// 第3引数に距離関数を指定
// この場合は、Pointオブジェクトの距離を求める関数を指定
var d = DTW.distance(ts1, ts2, distance);

console.log(ts1);
console.log(ts2);
console.log(d);
