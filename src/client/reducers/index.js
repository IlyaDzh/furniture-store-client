import { combineReducers } from "redux";

import user from "./user";
import cart from "./cart";
import orders from "./orders";
import catalog from "./catalog";
import products from "./products";
import home from "./home";
import info from "./info";
import news from "./news";
import comments from "./comments";

export default combineReducers({
    user,
    cart,
    orders,
    catalog,
    products,
    home,
    info,
    comments,
    news
});
