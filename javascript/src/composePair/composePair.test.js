const { add } = require('../add/add');
const { composePair } = require('./composePair')
const { curry } = require('../curry/curry');
const { multiply } = require('../multiply/multiply');
const { unity } = require('../unity/unity')
describe('composePair test', () => {

    test('works using two functions', () => {

        const double = curry(multiply,2);

        const sut = composePair(unity, double)

        const initial = 1;
        const expected = 2;

        expect(sut(initial)).toEqual(expected);
    });


    test('should evaluate right to Left', () => {
        const addOne = curry(add, 1);
        const double = curry(multiply,2);

        const sut = composePair(double, addOne);

        const initial = 1;
        const expectedRL = 4;

        expect(sut(initial)).toEqual(expectedRL);
    });

    test('should evaluate bottom to top', () => {

        const addOne = curry(add,1);
        const double = curry(multiply,2);

        const sut = composePair(addOne, double);

        const initial = 1;
        const expected = 3;

        expect(sut(initial)).toEqual(expected);
    });
});