var Point = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

Point.distance = function(p1, p2) {
    var x = Math.pow(p1.x - p2.x, 2);
    var y = Math.pow(p1.y - p2.y, 2);
    var z = Math.pow(p1.z - p2.z, 2);
    var d = Math.sqrt(x + y + z);
    return d;
};

module.exports = Point;
