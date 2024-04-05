import { combineReducers, createStore } from "redux";
import bukkit from "./modules/bukkit";

const rootReducer = combineReducers({
    bukkit: bukkit,
});

const store = createStore(rootReducer);

export default store;