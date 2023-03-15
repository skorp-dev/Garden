import { applyMiddleware, combineReducers, createStore } from "redux";
import { CategoriesReducer } from "./reducer/CategoriesReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: CategoriesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
