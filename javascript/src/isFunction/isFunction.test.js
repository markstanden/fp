const {isFunction} = require("./isFunction");

describe("isFunction test", () => {
    it("returns true for a standard function", ()=>{
        const func = function() {};
        const sut = isFunction(func);
        const expected = true;

        expect(sut).toEqual(expected);
    })

    it("returns true for an arrow function", ()=>{
        const arrow = () => {};
        const sut = isFunction(arrow);
        const expected = true;

        expect(sut).toEqual(expected);
    })

    it("returns false if not a function", ()=>{
        const value = "value";
        const sut = isFunction(value);
        const expected = false;

        expect(sut).toEqual(expected);
    })

    it("returns undefined if test function is undefined", ()=>{
        const undefinedValue = undefined;
        const sut = isFunction(undefinedValue);
        const expected = undefined

        expect(sut).toEqual(expected);
    })

    it("does not throw if test function is undefined", ()=>{
        const undefinedValue = undefined;
        const sut = () => isFunction(undefinedValue);

        expect(sut).not.toThrow();
    })

    it("returns undefined if test function is null", ()=>{
        const nullValue = null;
        const sut = isFunction(nullValue);
        const expected = undefined

        expect(sut).toEqual(expected);
    })

    it("does not throw if test function is null", ()=>{
        const nullValue = null;
        const sut = () => isFunction(nullValue);

        expect(sut).not.toThrow();
    })

});