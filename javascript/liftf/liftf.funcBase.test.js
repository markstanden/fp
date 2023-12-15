const {liftf} = require('./liftf')
const {add, divide, multiply, subtract} = require('../base/functional-base.js')

describe('liftf test', () => {

    describe('using add lambda', () => {
        let addf = liftf(add);

        it('both invocations zero', () => {
            expect(addf(0)(0)).toBe(0);
        });
        it('first invocation zero', () => {
            expect(addf(0)(1)).toBe(1);
        });
        it('second invocation zero', () => {
            expect(addf(1)(0)).toBe(1);
        });

        it('first value negative', () => {
            expect(addf(-3)(4)).toBe(1);
        });
        it('second value negative', () => {
            expect(addf(3)(-4)).toBe(-1);
        });

        it('two positive values, first larger', () => {
            expect(addf(4)(3)).toBe(7);
        });
        it('two positive values, second larger', () => {
            expect(addf(3)(4)).toBe(7);
        });

    });

    describe('using subtract lambda', () => {
        let subf = liftf(subtract);

        it('both invocations zero', () => {
            expect(subf(0)(0)).toBe(0);
        });
        it('first invocation zero', () => {
            expect(subf(0)(1)).toBe(-1);
        });
        it('second invocation zero', () => {
            expect(subf(1)(0)).toBe(1);
        });

        it('first value negative', () => {
            expect(subf(-3)(4)).toBe(-7);
        });
        it('second value negative', () => {
            expect(subf(3)(-4)).toBe(7);
        });

        it('two positive values, first larger', () => {
            expect(subf(4)(3)).toBe(1);
        });
        it('two positive values, second larger', () => {
            expect(subf(3)(4)).toBe(-1);
        });

    });

    describe('using multiply lambda', () => {
        let mulf = liftf(multiply);

        it('both invocations zero', () => {
            expect(mulf(0)(0)).toBe(0);
        });
        it('first invocation zero', () => {
            expect(mulf(0)(1)).toBe(0);
        });
        it('second invocation zero', () => {
            expect(mulf(1)(0)).toBe(0);
        });

        it('first value negative', () => {
            expect(mulf(-3)(4)).toBe(-12);
        });
        it('second value negative', () => {
            expect(mulf(3)(-4)).toBe(-12);
        });

        it('two positive values, first larger', () => {
            expect(mulf(4)(3)).toBe(12);
        });
        it('two positive values, second larger', () => {
            expect(mulf(3)(4)).toBe(12);
        });
    });

    describe('using divide lambda', () => {
        let div2 = liftf(divide);

        it('both invocations zero', () => {
            expect(div2(0)(0)).toBeNaN();
        });
        it('first invocation zero', () => {
            expect(div2(0)(1)).toBe(0);
        });
        it('second invocation zero', () => {
            expect(div2(1)(0)).toBe(Infinity);
        });

        it('first value negative', () => {
            expect(div2(-6)(2)).toBe(-3);
        });
        it('second value negative', () => {
            expect(div2(8)(-4)).toBe(-2);
        });

        it('two positive values, first larger', () => {
            expect(div2(4)(2)).toBe(2);
        });
        it('two positive values, second larger', () => {
            expect(div2(4)(8)).toBe(0.5);
        });
    });

})
