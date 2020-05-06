import { combineReducers } from "redux";

import user from "./user";
import products from "./products";
import home from "./home";
import info from "./info";
import news from "./news";
import comments from "./comments";

export default combineReducers({
    user,
    products,
    home,
    info,
    comments,
    news
});
