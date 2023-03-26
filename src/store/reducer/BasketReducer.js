const BASKET_INCREMENT = "BASKET_INCREMENT";
const BASKET_DECREMENT = "BASKET_DECREMENT";
const BASKET_DEL_ITEM = "BASKET_DEL_ITEM";
const BASKET_ADD = "BASKET_ADD";

const defBAsket = [
  { id: 1, count: 12 },
  { id: 2, count: 10 },
  { id: 3, count: 5 },
  { id: 4, count: 19 },
];

export const basketIncrementAction = (payload) => ({
  type: BASKET_INCREMENT,
  payload,
});

export const basketDecrementAction = (payload) => ({
  type: BASKET_DECREMENT,
  payload,
});

export const basketDelItemAction = (payload) => ({
  type: BASKET_DEL_ITEM,
  payload,
});

export const basketAddItemAction = (payload) => ({
  type: BASKET_ADD,
  payload,
});

export const BasketReducer = (state = defBAsket, action) => {
  if (action.type === BASKET_INCREMENT) {
    const product = state.find(({ id }) => action.payload === id);
    product.count++;
    return [...state];
  } else if (action.type === BASKET_DECREMENT) {
    const product = state.find(({ id }) => action.payload === id);

    if (product.count === 1) {
      return state.filter((item) => item !== product);
    } else {
      product.count--;
      return [...state];
    }
  } else if (action.type === BASKET_DEL_ITEM) {
    return state.filter(({ id }) => id !== action.payload);
  } else if (action.type === BASKET_ADD) {
    const product = state.find(({ id }) => id === action.payload);
    if (product === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else {
      product.count++;
      return [...state];
    }
  } else {
    return state;
  }
};
