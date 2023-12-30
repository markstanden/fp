/**
 * Identity function encapsulates data
 * in order to perform method chaining
 * @param {any} contents
 * @return {any}
 * @constructor
 */
class Box {
    _contents;

    constructor(contents) {
        this._contents = contents;
    }

    /**
     * returns the contents
     * @return {*}
     */
    get contents() {
        return this._contents;
    }

    /**
     * returns unboxed contents after
     * applying the passed function
     * @return {*}
     */
    fold(f) {
        return f(this._contents);
    }

    /**
     * returns boxed contents after
     * applying the passed function
     * @param {function(any):any} f
     * @return {Box}
     */
    map(f) {
        return Box.of(f(this._contents));
    }

    /**
     * returns the contents within a box
     * @param {any} contents
     * @return {Box}
     */
    static of(contents) {
        return new Box(contents);
    }

    /**
     * Returns the content of the box
     * expressed as a string
     * @return {string}
     */
    toString() {
        return `Object Box(${this._contents})`
    }
}

module.exports = {Box};