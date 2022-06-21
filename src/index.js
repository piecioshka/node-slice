/**
 * @author $AUTHOR$
 * @name $NAME$
 * @description $DESCRIPTION$
 * @version $VERSION$
 * @license $LICENSE$
 * @example
 * var slice = require('node-slices');
 * slice('the best cookie in the world', 9); // => "the best..."
 */

'use strict';

/**
 * Verify condition, and throw an error on failure.
 *
 * @param {boolean} condition
 * @param {string} message
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * Remove white spaces on the beginning & at the end.
 *
 * @param {string} source
 * @returns {XML|string|void}
 */
function trim(source) {
    return source.replace(/^\s+|\s+$/g, '');
}

/**
 * Cut passed string and put 3 dots (...) instead of replace chars.
 *
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
