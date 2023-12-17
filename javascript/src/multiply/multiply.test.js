const {multiply} = require('./multiply')


describe('multiply test', () => {
    it('both parameters zero', () => {
        expect(multiply(0, 0)).toBe(0);
    });
    it('first parameter zero', () => {
        expect(multiply(0, 1)).toBe(0);
    });
    it('second parameter zero', () => {
        expect(multiply(1, 0)).toBe(0);
    });

    it('first value negative', () => {
        expect(multiply(-3, 4)).toBe(-12);
    });
    it('second value negative', () => {
        expect(multiply(3, -4)).toBe(-12);
    });
    it('both values negative', () => {
        expect(multiply(-3, -4)).toBe(12);
    });

    it('two positive values, first larger', () => {
        expect(multiply(4, 3)).toBe(12);
    });
    it('two positive values, second larger', () => {
        expect(multiply(3, 4)).toBe(12);
    });
});