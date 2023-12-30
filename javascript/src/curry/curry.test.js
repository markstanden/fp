const {curry} = require('./curry.js')
const {add} = require('../add/add');
const {subtract} = require('../subtract/subtract');
const {multiply} = require('../multiply/multiply');
const {divide} = require('../divide/divide');

describe('curry test', () => {

    describe('using add lambda', () => {
        let add3 = curry(add, 3);

        test('zero argument', () => {
            expect(add3(0)).toBe(3);
        });
        test('pos argument', () => {
            expect(add3(1)).toBe(4);
        });
        test('neg argument', () => {
            expect(add3(-1)).toBe(2);
        });

        test('result 0', () => {
            expect(add3(-3)).toBe(0);
        });
    });

    describe('using subtract lambda', () => {
        let sub1 = curry(subtract, 1);

        test('zero argument', () => {
            expect(sub1(0)).toBe(-1);
        });
        test('pos argument', () => {
            expect(sub1(2)).toBe(1);
        });
        test('neg argument', () => {
            expect(sub1(-1)).toBe(-2);
        });

        test('result 0', () => {
            expect(sub1(1)).toBe(0);
        });
    });

    describe('using multiply lambda', () => {
        let mul2 = curry(multiply, 2);

        test('zero argument', () => {
            expect(mul2(0)).toBe(0);
        });
        test('pos argument 1', () => {
            expect(mul2(1)).toBe(2);
        });
        test('pos argument 2', () => {
            expect(mul2(2)).toBe(4);
        });
        test('neg argument 1', () => {
            expect(mul2(-1)).toBe(-2);
        });
        test('neg argument 2', () => {
            expect(mul2(-2)).toBe(-4);
        });

    });

    describe('using divide lambda', () => {
        let div2 = curry(divide, 2);

        test('zero argument', () => {
            expect(div2(0)).toBe(0);
        });
        test('pos argument 1', () => {
            expect(div2(2)).toBe(1);
        });
        test('pos argument 2', () => {
            expect(div2(4)).toBe(2);
        });
        test('neg argument 1', () => {
            expect(div2(-2)).toBe(-1);
        });
        test('neg argument 2', () => {
            expect(div2(-4)).toBe(-2);
        });

    });

})
