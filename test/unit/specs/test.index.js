'use strict';

var slice = require('../../../index');

describe('error handling', function () {
    it('should fail on bad arguments', function () {
        expect(function () {
            slice(null, 1, 'd');
        }).toThrow();
        expect(function () {
            slice('null', 'bla');
        }).toThrow();
    });
});

describe('good work', function () {
    it('should returns dots', function () {
        expect(slice('ciasteczko', 5, true)).toEqual('ciast...');
        expect(slice('ciasteczko', 5)).toEqual('ciast...');
        expect(slice('ciasteczko', 10)).toEqual('ciasteczko...');
        expect(slice('ciasteczko', 11)).toEqual('ciasteczko');
        expect(slice('the best cookie in the world', 9)).toEqual('the best...');
    });
});
