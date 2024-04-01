import { createStore, combineReducers } from "redux";

import cat from "./modules/cat";

const rootReducer = combineReducers({
    cat,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore([값], [미들웨어]);
const store = createStore(rootReducer, enhancer);

export default store;