import { combineReducers } from "redux";

import admin from "./admin";
import statistics from "./statistics";
import news from "./news";
import comments from "./comments";
import orders from "./orders";

export default combineReducers({
    admin,
    statistics,
    news,
    comments,
    orders
});
