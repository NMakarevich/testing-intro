const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, 'all');
    expect(result.length).toEqual(products.length);
    expect(result.map(item => item.id)).toEqual(products.map(product => product.id));
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, undefined);
    expect(result.length).toEqual(products.length);
    expect(result.map(item => item.id)).toEqual(products.map(product => product.id));
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, '');
    expect(result.length).toEqual(products.length);
    expect(result.map(item => item.id)).toEqual(products.map(product => product.id));
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const result = filterByCategory(products, 'electronics');
    expect(result.length).toEqual(2);
    expect(result.map(item => item.id)).toEqual([1, 2]);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    const result = filterByCategory(products, 'books');
    expect(result.length).toEqual(2);
    expect(result.map(item => item.id)).toEqual([3, 6]);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    const result = filterByCategory(products, 'home');
    expect(result.length).toEqual(2);
    expect(result.map(item => item.id)).toEqual([4, 5]);
  });
  test("'clothes' возвращает пустой массив", () => {
    const result = filterByCategory(products, 'clothes');
    expect(result.length).toEqual(0);
    expect(result).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
    const result = filterByCategory(products, 'toys');
    expect(result.length).toEqual(0);
    expect(result).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
    const result = filterByCategory(products, 'sports');
    expect(result.length).toEqual(0);
    expect(result).toEqual([]);
  });
});
