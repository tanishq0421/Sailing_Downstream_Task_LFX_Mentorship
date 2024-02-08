const filterList = require('./../src/filterlList');

test('throws an error if list length is not a multiple of 10', () => {
    expect(() => filterList([1, 2, 3])).toThrow("List length is not a multiple of 10");
});

test('returns a list with items at positions multiple of 2 or 3 removed', () => {
    expect(filterList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 5, 7]);
    expect(filterList([...Array(20).keys()].map(n => n + 1))).toEqual([1, 5, 7, 11, 13, 17, 19]);
});