const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sorted = sortProductsByPrice([...products], 'asc');
    expect(sorted.map(item => item.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const sorted = sortProductsByPrice([...products]);
    expect(sorted.map(item => item.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const productsIds = [1, 3, 4];
    const selectedProducts = [];
    for (let product of products) {
      if (productsIds.includes(product.id)) {
        selectedProducts.push(product);
      }
    }
    const sorted = sortProductsByPrice(selectedProducts, 'asc');
    expect(sorted.map(item => item.id)).toEqual([3, 4, 1]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sorted = sortProductsByPrice([...products], 'desc');
    expect(sorted.map(item => item.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const productsIds = [3, 1, 4];
    const selectedProducts = [];
    for (let product of products) {
      if (productsIds.includes(product.id)) {
        selectedProducts.push(product);
      }
    }
    const sorted = sortProductsByPrice(selectedProducts, 'desc');
    expect(sorted.map(item => item.id)).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const productsIds = [5, 2, 6];
    const selectedProducts = [];
    for (let product of products) {
      if (productsIds.includes(product.id)) {
        selectedProducts.push(product);
      }
    }
    const sorted = sortProductsByPrice(selectedProducts, 'desc');
    expect(sorted.map(item => item.id)).toEqual([2, 5, 6]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const productsIds = [1, 3, 4];
    const selectedProducts = [];
    for (let product of products) {
      if (productsIds.includes(product.id)) {
        selectedProducts.push(product);
      }
    }
    sortProductsByPrice(selectedProducts, 'asc');
    expect(selectedProducts.map(product => product.id)).toEqual([1, 3, 4]);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const productsIds = [1, 3, 4];
    const selectedProducts = [];
    for (let product of products) {
      if (productsIds.includes(product.id)) {
        selectedProducts.push(product);
      }
    }
    sortProductsByPrice(selectedProducts, 'desc');
    expect(selectedProducts.map(product => product.id)).toEqual([1, 3, 4]);
  });
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const productsIds = [...products.map(product => product.id)];
    sortProductsByPrice(products);
    expect(products.map(product => product.id)).toEqual(productsIds);
  });
});
