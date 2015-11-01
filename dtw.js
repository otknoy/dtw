var DTW = {};

function createMatrix(n, m) {
    var d = new Array(n);
    for (var i = 0; i < d.length; i++) {
	d[i] = new Array(m);
	for (var j = 0; j < d[i].length; j++) {
	    d[i][j] = 0;
	}
    }
    return d;
}

function createDtwMatrix(n, m) {
    var dtw = createMatrix(n, m);

    // init
    for (var i = 1; i < n; i++) {
	dtw[i][0] = Number.MAX_VALUE;
    }
    for (var j = 1; j < m; j++) {
	dtw[0][j] = Number.MAX_VALUE;
    }
    dtw[0][0] = 0;

    return dtw;
}

DTW.distance = function(ts1, ts2, distFunc) {
    var n = ts1.length;
    var m = ts2.length;
    var dtw = createDtwMatrix(n, m);

    for (var i = 1; i < n; i++) {
	for (var j = 1; j < m; j++) {
	    var cost = distFunc(ts1[i], ts2[j]);
	    dtw[i][j] = cost + Math.min(dtw[i-1][j], dtw[i][j-1], dtw[i-1][j-1]);
	}
    }

    return dtw[n-1][m-1];
};

module.exports = DTW;
