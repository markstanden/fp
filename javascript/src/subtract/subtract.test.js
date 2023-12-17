const {subtract} = require('./subtract');

describe('subtract test', () => {
    it('both parameters zero', () => {
        expect(subtract(0, 0)).toBe(0);
    });
    it('first parameter zero', () => {
        expect(subtract(0, 1)).toBe(-1);
    });
    it('second parameter zero', () => {
        expect(subtract(1, 0)).toBe(1);
    });

    it('first value negative', () => {
        expect(subtract(-3, 4)).toBe(-7);
    });
    it('second value negative', () => {
        expect(subtract(3, -4)).toBe(7);
    });

    it('two positive values, first larger', () => {
        expect(subtract(4, 3)).toBe(1);
    });
    it('two positive values, second larger', () => {
        expect(subtract(3, 4)).toBe(-1);
    });
});