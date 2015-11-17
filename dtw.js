var DTW = {};

function createMatrix(n, m, v) {
    var d = new Array(n);
    for (var i = 0; i < d.length; i++) {
	d[i] = new Array(m);
	for (var j = 0; j < d[i].length; j++) {
	    d[i][j] = v;
	}
    }
    return d;
}

DTW.distance = function(ts1, ts2, distFunc, w) {
    var n = ts1.length;
    var m = ts2.length;

    // default window size
    if (typeof w === 'undefined') {
	w = Math.max(n, m);
    }

    w = Math.max(w, Math.abs(n - m));
    // console.log(w);

    var costMatrix = createMatrix(n+1, m+1, Number.POSITIVE_INFINITY);
    costMatrix[0][0] = 0;

    for (var i = 1; i <= n; i++) {
	var begin = Math.max(1, i - w);
	var end   = Math.min(m, i + w);
	for (var j = begin; j <= end; j++) {
	    var cost = distFunc(ts1[i-1], ts2[j-1]);
	    costMatrix[i][j] = cost + Math.min(costMatrix[i-1][j  ],
					       costMatrix[i  ][j-1],
					       costMatrix[i-1][j-1]);
	}
    }
    // console.log(costMatrix);

    return costMatrix[n][m];
};

module.exports = DTW;
