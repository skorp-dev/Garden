import { applyMiddleware, combineReducers, createStore } from "redux";
import { CategoryReducer } from "./reducer/CategoryReducer";
import { ProductsReducer } from "./reducer/ProductsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: CategoryReducer,
  products: ProductsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
