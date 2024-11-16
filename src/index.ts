/**
 * @author $AUTHOR$
 * @name $NAME$
 * @description $DESCRIPTION$
 * @version $VERSION$
 * @license $LICENSE$
 * @example
 * const slice = require('node-slices');
 * slice('the best cookie in the world', 9); // => "the best..."
 */

/**
 * Verify condition, and throw an error on failure.
 */
function assert(condition: boolean, message: string): asserts condition {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * Remove white spaces on the beginning & at the end.
 */
function trim(source: string): string {
    return source.replace(/^\s+|\s+$/g, "");
}

/**
 * Cut passed string and put 3 dots (...) instead of replace chars.
 */
export default function slice(
    source: string,
    length: number,
    isForce = false
): string {
    assert(typeof source === "string", "source is not a string");
    assert(typeof length === "number", "length is not a number");

    let lastSpaceIndex;

    // When source is longer than limit, return it
    if (source.length < length) {
        return source;
    }

    // Slice source text using second param
    const text = source.slice(0, length);

    // If we don't cut in the middle of word, add ellipsis
    if (source[length] === " " || text[length - 1] === " ") {
        return trim(text) + "...";
    }

    if (!isForce) {
        lastSpaceIndex = text.lastIndexOf(" ");

        if (lastSpaceIndex !== -1) {
            return text.slice(0, lastSpaceIndex) + "...";
        }
    }

    return text + "...";
}
