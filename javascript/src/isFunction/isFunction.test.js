const {isFunction} = require("./isFunction");

describe("isFunction test", () => {
    test("returns true for a standard function", ()=>{
        const func = function() {};
        const sut = isFunction(func);
        const expected = true;

        expect(sut).toEqual(expected);
    })

    test("returns true for an arrow function", ()=>{
        const arrow = () => {};
        const sut = isFunction(arrow);
        const expected = true;

        expect(sut).toEqual(expected);
    })

    test("returns false if not a function", ()=>{
        const value = "value";
        const sut = isFunction(value);
        const expected = false;

        expect(sut).toEqual(expected);
    })

    test("returns undefined if test function is undefined", ()=>{
        const undefinedValue = undefined;
        const sut = isFunction(undefinedValue);
        const expected = undefined

        expect(sut).toEqual(expected);
    })

    test("does not throw if test function is undefined", ()=>{
        const undefinedValue = undefined;
        const sut = () => isFunction(undefinedValue);

        expect(sut).not.toThrow();
    })

    test("returns undefined if test function is null", ()=>{
        const nullValue = null;
        const sut = isFunction(nullValue);
        const expected = undefined

        expect(sut).toEqual(expected);
    })

    test("does not throw if test function is null", ()=>{
        const nullValue = null;
        const sut = () => isFunction(nullValue);

        expect(sut).not.toThrow();
    })

});