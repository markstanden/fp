const {multiply} = require('./multiply')


describe('multiply test', () => {
    test('both parameters zero', () => {
        expect(multiply(0, 0)).toBe(0);
    });
    test('first parameter zero', () => {
        expect(multiply(0, 1)).toBe(0);
    });
    test('second parameter zero', () => {
        expect(multiply(1, 0)).toBe(0);
    });

    test('first value negative', () => {
        expect(multiply(-3, 4)).toBe(-12);
    });
    test('second value negative', () => {
        expect(multiply(3, -4)).toBe(-12);
    });
    test('both values negative', () => {
        expect(multiply(-3, -4)).toBe(12);
    });

    test('two positive values, first larger', () => {
        expect(multiply(4, 3)).toBe(12);
    });
    test('two positive values, second larger', () => {
        expect(multiply(3, 4)).toBe(12);
    });
});