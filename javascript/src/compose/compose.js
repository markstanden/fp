const {composePair} = require('../composePair/composePair');

/**
 * recursively nests functions within each other
 * @param {function(*):*} fns
 * @return {*}
 *
 */
function compose(...fns){
    return fns.reduce(composePair);
}

module.exports = {compose}