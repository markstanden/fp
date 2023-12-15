const {add} = require('./functional-base.js')

describe('add test', () => {
    it('both parameters zero', () => {
        expect(add(0, 0)).toBe(0);
    });
    it('first parameter zero', () => {
        expect(add(0, 1)).toBe(1);
    });
    it('second parameter zero', () => {
        expect(add(1, 0)).toBe(1);
    });

    it('first value negative', () => {
        expect(add(-3, 4)).toBe(1);
    });
    it('second value negative', () => {
        expect(add(3, -4)).toBe(-1);
    });

    it('two positive values, first larger', () => {
        expect(add(4, 3)).toBe(7);
    });
    it('two positive values, second larger', () => {
        expect(add(3, 4)).toBe(7);
    });

});