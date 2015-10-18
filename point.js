var Point = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

Point.prototype.distance = function(point) {
    var x = Math.pow(this.x - point.x, 2);
    var y = Math.pow(this.y - point.y, 2);
    var z = Math.pow(this.z - point.z, 2);
    var d = Math.sqrt(x + y + z);
    return d;
};

module.exports = Point;
