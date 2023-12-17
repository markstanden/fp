const {when} = require('./when');
describe('when tests', () => {
    it('should run the function if the predicate is true', () => {
        const fn = () => 1;
        const predicate = () => true;
        const sut = when(fn)(predicate)("ANYTHING");
        const expected = 1;

        expect(sut).toEqual(expected);
    })

    it('should run not the function if the predicate is false', () => {
        const fn = () => 1;
        const predicate = () => false;
        const sut = when(fn)(predicate)("ANYTHING");
        const expected = undefined;

        expect(sut).toEqual(expected);
    })

    it('should evaluate the predicate and run the function if the predicate is true', () => {
        const fn = () => 1;
        const predicate = (a) => a < 0;
        const sut = when(fn)(predicate)(-1);
        const expected = 1;

        expect(sut).toEqual(expected);
    })

    it('should evaluate the predicate and not run the function if the predicate is false', () => {
        const fn = () => 1;
        const predicate = (a) => a < 0;
        const sut = when(fn)(predicate)(1);
        const expected = undefined;

        expect(sut).toEqual(expected);
    })

    it('should pass arguments into the function', () => {
        const fn = (a, b) => a + b;
        const predicate = () => true;
        const sut = when(fn)(predicate)(1, 2);
        const expected = 3;

        expect(sut).toEqual(expected);
    })

    it('should not mutate arguments', () => {
        const fn = (a, b) => {
            a++;
            b++;
            return a + b;
        }
        const predicate = (a, b) => {
            a++;
            b++;
            return a + b > 4;
        };
        let a = 1;
        let b = 2;
        const expectedA = 1;
        const expectedB = 2;

        when(fn)(predicate)(a, b);

        expect(a).toEqual(expectedA);
        expect(b).toEqual(expectedB);
    })

    it('predicate actions should not affect function arguments', () => {
        const fn = (a, b) => {
            a++;
            b++;
            return a + b;
        }
        const predicate = (a, b) => {
            a++;
            b++;
            return a + b > 4;
        };
        let a = 1;
        let b = 2;
        const sut = when(fn)(predicate)(a, b);
        const expected = 5;

        expect(sut).toEqual(expected);
    })
})