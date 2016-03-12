var complex = require('./complex'),
	util = require('./util');

module.exports = {
  fft: function fft(vector) {
    var X = [],
        N = vector.length;

    if (N == 1) {
      return [[vector[0], 0]];
    }

    var Evens = fft(vector.filter(even)),    
        Odds  = fft(vector.filter(odd));
    
    for (var k = 0; k < N / 2; k++) {
      
      var t = Evens[k],
          e = complex.multiply(util.exponent(k, N), Odds[k]);

      X[k] = complex.add(t, e);
      X[k + (N / 2)] = complex.subtract(t, e);
    }

    function even(__, ix) {
      return ix % 2 == 0;
    }

    function odd(__, ix) {
      return ix % 2 == 1;
    }

    return X;
  }
}