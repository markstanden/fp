/**
 * Returns true if the passed parameter is a function.
 * @param {any} f
 * @return {boolean} True for passed functions
 */
function isFunction(f) {
    if(f) {
        return typeof f === 'function' && Object.prototype.toString.call(f) === '[object Function]';
    }
}

module.exports = {isFunction};