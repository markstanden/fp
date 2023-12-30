const LOG_PREFIX = 'MS: ';

function log(message) {
    return function(x){
        console.log(`${LOG_PREFIX}${message}: ${x}`)
        return x;
    }
}

module.exports = {log}