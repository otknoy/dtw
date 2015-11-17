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

DTW.distance = function(ts1, ts2, distFunc) {
    var n = ts1.length;
    var m = ts2.length;

    var costMatrix = createMatrix(n+1, m+1, Number.POSITIVE_INFINITY);
    costMatrix[0][0] = 0;

    for (var i = 1; i <= n; i++) {
	for (var j = 1; j <= n; j++) {
	    var cost = distFunc(ts1[i-1], ts2[j-1]);
	    costMatrix[i][j] = cost + Math.min(costMatrix[i-1][j  ],
					       costMatrix[i  ][j-1],
					       costMatrix[i-1][j-1]);
	}
    }

    console.log(costMatrix);

    return costMatrix[n][m];
};

module.exports = DTW;
