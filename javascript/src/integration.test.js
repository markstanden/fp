describe('integration test', () => {
    test('basic test', () => {

        let count = 0;
        function increments(){
            count++;
        }

        increments();
        increments();

        expect(count).toEqual(2);
    })

})