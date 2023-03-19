import { applyMiddleware, combineReducers, createStore } from "redux";
import { CategoryReducer } from "./reducer/CategoryReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  category: CategoryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
