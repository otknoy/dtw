var DTW = require('./dtw.js');

var ts1 = [1, 2, 3, 4, 5];
var ts2 = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function distFunc(a, b) {
    return Math.abs(a - b);
}

var dist = DTW.distance(ts1, ts2, distFunc);

console.log(ts1);
console.log(ts2);
console.log(dist);
