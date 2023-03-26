const PRODUCTS_LOAD = "PRODUCTS_LOAD";


export const loadProductsAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});


export const ProductsReducer = (state = [], action) => {
  if (action.type === PRODUCTS_LOAD) {
    return action.payload;
  }  else {
    return state;
  }
};
