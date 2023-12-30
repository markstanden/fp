const {add} = require('../add/add');
const {compose} = require('./compose');
const {curry} = require('../curry/curry');
const {multiply} = require('../multiply/multiply');
const {unity} = require('../unity/unity');
describe('compose test - should evaluate bottom to top', () => {

    test('works using one function', () => {

        const sut = compose(unity);

        const initial = 1;
        const expected = 1;

        expect(sut(initial)).toEqual(expected);
    });


    test('works with two functions', () => {

        const addOne = curry(add, 1);
        const double = curry(multiply, 2);

        const initial = 1;

        const sut = compose(
            double, // 4
            addOne, // 2
        );

        const expected = 4;

        expect(sut(initial)).toEqual(expected);
    });

    test('works correctly with the two functions order reversed', () => {

        const addOne = curry(add, 1);
        const double = curry(multiply, 2);

        const sut = compose(
            addOne, // 3
            double, // 2
        );

        const initial = 1;
        const expected = 3;

        expect(sut(initial)).toEqual(expected);
    });

    test('works with three functions', () => {

        const addOne = curry(add, 1);
        const addTwo = curry(add, 2);
        const double = curry(multiply, 2);

        const sut = compose(
            addTwo, // 6
            double, // 4
            addOne, // 2
        );

        const initial = 1;
        const expected = 6;

        expect(sut(initial)).toEqual(expected);
    });

    test('works with ten functions', () => {

        const addOne = curry(add, 1);
        const addTwo = curry(add, 2);
        const double = curry(multiply, 2);

        const sut = compose(
            addOne, // 37
            addTwo, // 36
            double, // 34
            addOne, // 17
            addTwo, // 16
            double, // 14
            addOne, // 7
            addTwo, // 6
            double, // 4
            addOne, // 2
        );

        const initial = 1;
        const expected = 37;

        expect(sut(initial)).toEqual(expected);
    });
});