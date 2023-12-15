function curry(func, b) {
    return function (a) {
        return func(a, b);
    }
}

module.exports = {
    curry,
}