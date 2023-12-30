const prop = require("./prop");

describe("prop test", () => {
    const testObject = {
        first: "First Value",
        second: "Second Value",
        third: "Third Value",
    }

    test("returns first value correctly", ()=>{
        const getFirst = prop('first');
        const sut = getFirst(testObject);
        const expected = "First Value"

        expect(sut).toEqual(expected);
    })

    test("returns second value correctly", ()=>{
        const getSecond = prop('second');
        const sut = getSecond(testObject);
        const expected = "Second Value"

        expect(sut).toEqual(expected);
    })

    test("returns returns undefined if key not present", ()=>{
        const getUndefinedProp = prop('xxxxxx');
        const sut = getUndefinedProp(testObject);
        const expected = undefined

        expect(sut).toEqual(expected);
    })

    test("does not throw if key not present", ()=>{
        const getUndefinedProp = prop('xxxxxx');
        const sut = () => getUndefinedProp(testObject);

        expect(sut).not.toThrow();
    })

});