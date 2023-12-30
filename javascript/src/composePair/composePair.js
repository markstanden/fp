/**
 * @param {function(*):*} f
 * @param {function(*):*} g
 * @return {function(*):*}
 */
function composePair(f, g) {
    return function(args) {
        return f(g(args));
    }
}

module.exports = { composePair };