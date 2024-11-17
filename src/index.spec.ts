'use strict';

import slice from './index';
import { suite, it, expect } from 'vitest';

suite('error handling', function () {
    it('should fail on bad arguments', function () {
        expect(function () {
            // @ts-expect-error
            slice(null, 1, 'd');
        }).toThrow();
        expect(function () {
            // @ts-expect-error
            slice('null', 'bla');
        }).toThrow();
    });
});

suite('good work', function () {
    it('should returns dots', function () {
        expect(slice('ciasteczko', 5, true)).toEqual('ciast...');
        expect(slice('ciasteczko', 5)).toEqual('ciast...');
        expect(slice('ciasteczko', 10)).toEqual('ciasteczko...');
        expect(slice('ciasteczko', 11)).toEqual('ciasteczko');
        expect(slice('the best cookie in the world', 9)).toEqual('the best...');
        expect(slice('the best cookie in the world', 10)).toEqual('the best...');
    });
});
