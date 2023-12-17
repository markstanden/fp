const {isFunction} = require("../isFunction/isFunction");

/**
 * obtains and returns the value at the provided key.
 * if value is a function the function is called and result returned.
 * @param {string} key
 * @return {(function(object): *|undefined)}
 */
function prop(key) {
    return function(object) {
        if (object[key]) {
            return isFunction(object[key]) ? object[key].call(object) : object[key];
        }
    }
}

module.exports = prop;