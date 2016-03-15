var assert = require('assert'),
    fft = require('../').fft;

describe('FFT Library Test', function () {

    describe('1,0,1,0', function () {
        it('Should properly compute [1,0,1,0]', function () {
            var coef = fft([1,0,1,0]);
            checkShortVector(coef);
        });
    });

    describe('1,0,1,0,2,0,2,0', function () {
        it('Should properly compute [1,0,1,0,2,0,2,0]', function () {
            var coef = fft([1,0,1,0,2,0,2,0]);
            checkLongVector(coef);
        });
    });
});

function checkShortVector(coef) {
    assert(isEqualWithThresh(coef[0][0], 2, 0.01));
    assert(isEqualWithThresh(coef[0][1], 0, 0.01));
    assert(isEqualWithThresh(coef[1][0], 0, 0.01));
    assert(isEqualWithThresh(coef[1][1], 0, 0.01));
    assert(isEqualWithThresh(coef[2][0], 2, 0.01));
    assert(isEqualWithThresh(coef[2][1], 0, 0.01));
    assert(isEqualWithThresh(coef[3][0], 0, 0.01));
    assert(isEqualWithThresh(coef[3][1], 0, 0.01));
}

function checkLongVector(coef) {
    assert(isEqualWithThresh(coef[0][0], 6, 0.01));
    assert(isEqualWithThresh(coef[0][1], 0, 0.01));
    assert(isEqualWithThresh(coef[1][0], -1, 0.01));
    assert(isEqualWithThresh(coef[1][1], 1, 0.01));
    assert(isEqualWithThresh(coef[2][0], 0, 0.01));
    assert(isEqualWithThresh(coef[2][1], 0, 0.01));
    assert(isEqualWithThresh(coef[3][0], -1, 0.01));
    assert(isEqualWithThresh(coef[3][1], -1, 0.01));
    assert(isEqualWithThresh(coef[4][0], 6, 0.01));
    assert(isEqualWithThresh(coef[4][1], 0, 0.01));
    assert(isEqualWithThresh(coef[5][0], -1, 0.01));
    assert(isEqualWithThresh(coef[5][1], 1, 0.01));
    assert(isEqualWithThresh(coef[6][0], 0, 0.01));
    assert(isEqualWithThresh(coef[6][1], 0, 0.01));
    assert(isEqualWithThresh(coef[7][0], -1, 0.01));
    assert(isEqualWithThresh(coef[7][1], -1, 0.01));
}

function isEqualWithThresh(val1, val2, threshold) {
    return (val1 > val2 - threshold) &&
           (val1 < val2 + threshold);
}