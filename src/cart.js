function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

const AVAILABLE_PROMOS = ['SAVE10'];
const MIN_DISCOUNT = 20000;
const MIN_FREE_DELIVERY = 50000;
const DELIVERY_PRICE = 30000;

function addToCart(cart, product, quantity) {
  if (quantity === 0 || quantity > product.stock) {
    throw RangeError();
  }
  if (cart.length === 0) {
    cart.push({...product, quantity});
  } else {
    const productCart = cart.find(p => p.id === product.id);
    if (productCart) {
      if (productCart.quantity + quantity > product.stock) {
        throw RangeError();
      }
      productCart.quantity += quantity;
    } else {
      cart.push({...product, quantity});
    }
  }
  return cart;
}
function changeQuantity(cart, id, quantity) {
  if (quantity === 0) {
    throw RangeError();
  }
  const productCart = cart.find(p => p.id === id);
  if (productCart) {
    if (quantity > productCart.stock) {
      throw RangeError();
    }
    productCart.quantity = quantity;
  }
  return cart;
}
function removeFromCart(cart, id) {
  cart = cart.filter(p => p.id !== id);
  return cart;
}
function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
function calculateOrderTotal(cart, promo = '') {
  const subtotal = calculateCartSubtotal(cart);
  const discount = subtotal >= MIN_DISCOUNT && promo && AVAILABLE_PROMOS.includes(promo) ? subtotal * 0.1 : 0;
  const delivery = subtotal >= MIN_FREE_DELIVERY ? 0 : DELIVERY_PRICE;
  const total = subtotal - discount + delivery;
  return {subtotal, discount, delivery, total};
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
