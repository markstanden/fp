const {divide} = require('./divide')

describe('divide test', () => {
    test('both invocations zero', () => {
        expect(divide(0, 0)).toBeNaN();
    });
    test('first invocation zero', () => {
        expect(divide(0, 1)).toBe(0);
    });
    test('second invocation zero', () => {
        expect(divide(1, 0)).toBe(Infinity);
    });

    test('first value negative', () => {
        expect(divide(-6, 2)).toBe(-3);
    });
    test('second value negative', () => {
        expect(divide(8, -4)).toBe(-2);
    });

    test('two positive values, first larger', () => {
        expect(divide(4, 2)).toBe(2);
    });
    test('two positive values, second larger', () => {
        expect(divide(4, 8)).toBe(0.5);
    });
});