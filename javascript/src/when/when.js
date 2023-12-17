function when(fn) {
    return function filtered(predicate){
        return function (...fnArgs) {
            if(predicate(...fnArgs)){
                return fn(...fnArgs)
            }
        }
    }
}

module.exports = {
    when,
};