const {Box} = require('./box.js');

describe('Box tests', () => {

    test('getter returns unboxed contents', () => {

        const given = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];

        const sut = given.map(x =>
            Box.of(x)
                .contents,
        );

        expect(sut).toEqual(expected);
    });

    test('fold maps over and returns unboxed contents', () => {
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

    test('map maps over and returns boxed contents', () => {
        const double = x => x * 2;
        const square = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [Box.of(2), Box.of(8), Box.of(18), Box.of(32), Box.of(50)];

        const sut = given.map(x =>
            Box.of(x)
                .map(square)
                .map(double)
        );

        expect(sut).toEqual(expected);
    });

    test('map maps over contents and returns unboxed contents using getter', () => {
        const double = x => x * 2;
        const square = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [2, 8, 18, 32, 50];

        const sut = given.map(x =>
            Box.of(x)
                .map(square)
                .map(double)
                .contents
        );

        expect(sut).toEqual(expected);
    });


    test('can method chain, with fold to release contents', () => {
        const double = x => x * 2;
        const square = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [2, 8, 18, 32, 50];

        const sut = x =>
            Box.of(x)
                .map(square)
                .fold(double)

        const result = given.map(sut);

        expect(result).toEqual(expected);
    });

    test('can flatten nested contents', () => {
        const double = x => x * 2;
        const square = x => x ** 2;

        const given = [1, 2, 3, 4, 5];
        const expected = [2, 8, 18, 32, 50];

        const sut = x => Box.of(x)
                .chain(y =>
                    Box.of(y)
                        .map(square)
                        .map(double)
                ).contents

        const result = given.map(sut);

        expect(result).toEqual(expected);
    });

    test('is composable', () => {
        function sut_compose(g, f) {
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

        const squareThenDouble = sut_compose(double, square);

        const result = given.map(squareThenDouble);

        expect(result).toEqual(expected);
    });
});