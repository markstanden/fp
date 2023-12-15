const {curry} = require('./curry.js')
const {add, divide, multiply, subtract} = require('../base/functional-base.js')


describe('curry test', () => {

    describe('using add lambda', () => {
        let add3 = curry(add, 3);

        it('zero argument', () => {
            expect(add3(0)).toBe(3);
        });
        it('pos argument', () => {
            expect(add3(1)).toBe(4);
        });
        it('neg argument', () => {
            expect(add3(-1)).toBe(2);
        });

        it('result 0', () => {
            expect(add3(-3)).toBe(0);
        });
    });

    describe('using subtract lambda', () => {
        let sub1 = curry(subtract, 1);

        it('zero argument', () => {
            expect(sub1(0)).toBe(-1);
        });
        it('pos argument', () => {
            expect(sub1(2)).toBe(1);
        });
        it('neg argument', () => {
            expect(sub1(-1)).toBe(-2);
        });

        it('result 0', () => {
            expect(sub1(1)).toBe(0);
        });
    });

    describe('using multiply lambda', () => {
        let mul2 = curry(multiply, 2);

        it('zero argument', () => {
            expect(mul2(0)).toBe(0);
        });
        it('pos argument 1', () => {
            expect(mul2(1)).toBe(2);
        });
        it('pos argument 2', () => {
            expect(mul2(2)).toBe(4);
        });
        it('neg argument 1', () => {
            expect(mul2(-1)).toBe(-2);
        });
        it('neg argument 2', () => {
            expect(mul2(-2)).toBe(-4);
        });

    });

    describe('using divide lambda', () => {
        let div2 = curry(divide, 2);

        it('zero argument', () => {
            expect(div2(0)).toBe(0);
        });
        it('pos argument 1', () => {
            expect(div2(2)).toBe(1);
        });
        it('pos argument 2', () => {
            expect(div2(4)).toBe(2);
        });
        it('neg argument 1', () => {
            expect(div2(-2)).toBe(-1);
        });
        it('neg argument 2', () => {
            expect(div2(-4)).toBe(-2);
        });

    });

})
