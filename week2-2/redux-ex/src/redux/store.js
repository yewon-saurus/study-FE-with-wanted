import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cat from './slices/cat'

const rootReducer = combineReducers({
    "cat": cat,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;