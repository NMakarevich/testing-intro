const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products,'Наушники');
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(products[0].id)
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const result = searchProducts(products, 'Чистый код');
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(products[5].id)
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const result = searchProducts(products, 'Настольная лампа');
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(products[3].id);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const result = searchProducts(products, 'javascript');
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(products[2].id);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const result = searchProducts(products, 'ЧЕХОЛ');
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(products[4].id);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, 'наушники');
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(products[0].id);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '');
    expect(result.length).toEqual(products.length);
    expect(result.map(item => item.id)).toEqual(products.map(product => product.id));
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '    ');
    expect(result.length).toEqual(products.length);
    expect(result.map(item => item.id)).toEqual(products.map(product => product.id));
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '\t\n');
    expect(result.length).toEqual(products.length);
    expect(result.map(item => item.id)).toEqual(products.map(product => product.id));
  });
});
