import { combineReducers } from "redux";

import home from "./home";
import info from "./info";
import news from "./news";
import comments from "./comments";

export default combineReducers({
    home,
    info,
    comments,
    news
});
