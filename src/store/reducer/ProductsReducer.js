const PRODUCTS_LOAD = "PRODUCTS_LOAD";
const PRODUCTS_PRICE_FILTER = "PRODUCTS_PRICE_FILTER";
const PRODUCTS_SALES_CHECK = "PRODUCTS_SALES_CHECK";
const PRODUCTS_SELECT = "PRODUCTS_SELECT";
const PRODUCTS_FILTER_RESET = "PRODUCTS_FILTER_RESET";

export const loadProductsAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});

export const productsPriceFilterAction = (payload) => ({
  type: PRODUCTS_PRICE_FILTER,
  payload,
});

export const productsSalesCheckAction = (payload) => ({
  type: PRODUCTS_SALES_CHECK,
  payload,
});

export const productsSelectAction = (payload) => ({
  type: PRODUCTS_SELECT,
  payload,
});

export const productsFilterResetAction = () => ({
  type: PRODUCTS_SELECT,
});

export const ProductsReducer = (state = [], action) => {
  if (action.type === PRODUCTS_LOAD) {
    return action.payload.map((item) => ({
      ...item,
      show: { price: true, discount: true },
    }));
  } else if (action.type === PRODUCTS_PRICE_FILTER) {
    const { min, max } = action.payload;
    return state.map((item) => {
      item.show.price = item.price >= min && item.price <= max;
      return item;
    });
  } else if (action.type === PRODUCTS_SALES_CHECK) {
    return state.map((item) => {
      item.show.discount = item.discont_price !== null || !action.payload;
      return item;
    });
  } else if (action.type === PRODUCTS_SELECT) {
    if (action.payload === "priceUp") {
      state.sort((a, b) => a.price - b.price);
    } else if (action.payload === "priceDown") {
      state.sort((a, b) => b.price - a.price);
    }
    return [...state];
  } else if (action.type === PRODUCTS_FILTER_RESET) {
    return state.map((item) => {
      item.show.search = true;
      item.show.price = true;
      return item;
    });
  }
  return state;
};
