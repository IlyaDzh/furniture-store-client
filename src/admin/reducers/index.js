import { combineReducers } from "redux";

import admin from "./admin";
import orders from "./orders";

export default combineReducers({
    admin,
    orders
});
