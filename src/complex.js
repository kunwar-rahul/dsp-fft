module.exports = {
	add : function (a, b) {
		return [a[0] + b[0], a[1] + b[1]];
	},

	subtract : function (a, b) {
		return [a[0] - b[0], a[1] - b[1]];
	},

	multiply : function (a, b) {
		return [(a[0] * b[0] - a[1] * b[1]), 
            (a[0] * b[1] + a[1] * b[0])];
	},

	magnitude : function (a) {
		return Math.sqrt(a[0]*a[0] + a[1]*a[1]);
	}
}