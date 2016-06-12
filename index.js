'use strict';

function assert(condition, message) {
    if (!condition) {
        throw new Error('Assertion Error' || message);
    }
}

function trim(source) {
    return source.replace(/^\s+|\s+$/g, '');
}

/**
 * @param {string} source
 * @param {number} length
 * @param {boolean} [isForce]
 * @returns {string}
 */
function slice(source, length, isForce) {
    assert(typeof source === 'string', 'source is not a string');
    assert(typeof length === 'number', 'length is not a number');

    var lastSpaceIndex;

    // When source is longer than limit, return it
    if (source.length < length) {
        return source;
    }

    // Slice source text using second param
    var text = source.slice(0, length);

    // If we don't cut in the middle of word, add ellipsis
    if (source[length] === ' ' || text[length - 1] === ' ') {
        return trim(text) + '...';
    }

    if (!isForce) {
        lastSpaceIndex = text.lastIndexOf(' ');

        if (lastSpaceIndex !== -1) {
            return text.slice(0, lastSpaceIndex) + '...';
        }
    }

    return text + '...';
}

module.exports = slice;
