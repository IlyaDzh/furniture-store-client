import { combineReducers } from "redux";

import admin from "./admin";
import statistics from "./statistics";
import about from "./about";
import news from "./news";
import comments from "./comments";
import orders from "./orders";

export default combineReducers({
    admin,
    statistics,
    about,
    news,
    comments,
    orders
});
