const {add} = require('./add')

describe('add test', () => {
    test('both parameters zero', () => {
        expect(add(0, 0)).toBe(0);
    });
    test('first parameter zero', () => {
        expect(add(0, 1)).toBe(1);
    });
    test('second parameter zero', () => {
        expect(add(1, 0)).toBe(1);
    });

    test('first value negative', () => {
        expect(add(-3, 4)).toBe(1);
    });
    test('second value negative', () => {
        expect(add(3, -4)).toBe(-1);
    });

    test('two positive values, first larger', () => {
        expect(add(4, 3)).toBe(7);
    });
    test('two positive values, second larger', () => {
        expect(add(3, 4)).toBe(7);
    });

});