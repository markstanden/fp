const {subtract} = require('./subtract');

describe('subtract test', () => {
    test('both parameters zero', () => {
        expect(subtract(0, 0)).toBe(0);
    });
    test('first parameter zero', () => {
        expect(subtract(0, 1)).toBe(-1);
    });
    test('second parameter zero', () => {
        expect(subtract(1, 0)).toBe(1);
    });

    test('first value negative', () => {
        expect(subtract(-3, 4)).toBe(-7);
    });
    test('second value negative', () => {
        expect(subtract(3, -4)).toBe(7);
    });

    test('two positive values, first larger', () => {
        expect(subtract(4, 3)).toBe(1);
    });
    test('two positive values, second larger', () => {
        expect(subtract(3, 4)).toBe(-1);
    });
});