const {divide} = require('./functional-base.js')

describe('divide test', () => {
    it('both invocations zero', () => {
        expect(divide(0, 0)).toBeNaN();
    });
    it('first invocation zero', () => {
        expect(divide(0, 1)).toBe(0);
    });
    it('second invocation zero', () => {
        expect(divide(1, 0)).toBe(Infinity);
    });

    it('first value negative', () => {
        expect(divide(-6, 2)).toBe(-3);
    });
    it('second value negative', () => {
        expect(divide(8, -4)).toBe(-2);
    });

    it('two positive values, first larger', () => {
        expect(divide(4, 2)).toBe(2);
    });
    it('two positive values, second larger', () => {
        expect(divide(4, 8)).toBe(0.5);
    });
});