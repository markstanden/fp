const {Box} = require('./box.js');

describe('Box tests', () => {

    test('getter returns unboxed contents', () => {
        const fn = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];

        const sut = given.map(x =>
            Box.of(x)
                .contents,
        );

        expect(sut).toEqual(expected);
    });

    test('fold maps over and returns unboxed contents', () => {
        const fn = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [1, 4, 9, 16, 25];

        const sut = given.map(x =>
            Box.of(x)
                .map(fn)
                .fold(x => x),
        );

        expect(sut).toEqual(expected);
    });

    test('map maps over and returns boxed contents', () => {
        const fn = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [Box.of(1), Box.of(4), Box.of(9), Box.of(16), Box.of(25)];

        const sut = given.map(x =>
            Box.of(x)
                .map(fn),
        );

        expect(sut).toEqual(expected);
    });


    test('can method chain, with fold to release contents', () => {
        const double = x => x * 2;
        const square = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [2, 8, 18, 32, 50];

        const sut = given.map(x =>
            Box.of(x)
                .map(square)
                .fold(double),
        );

        expect(sut).toEqual(expected);
    });

    test('is composable', () => {
        function compose(g, f) {
            return function (x) {
                return Box.of(x)
                    .map(f)
                    .fold(g);
            };
        }

        const double = x => x * 2;
        const square = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [2, 8, 18, 32, 50];

        const sut_squareThenDouble = compose(double, square);

        const result = given.map(sut_squareThenDouble);

        expect(result).toEqual(expected);
    });
});