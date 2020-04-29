import { combineReducers } from "redux";

import user from "./user";
import home from "./home";
import info from "./info";
import news from "./news";
import comments from "./comments";

export default combineReducers({
    user,
    home,
    info,
    comments,
    news
});
