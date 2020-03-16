import { combineReducers } from 'redux';

import home from './home';
import comments from './comments';
import news from './news';

export default combineReducers({
    home,
    news,
    comments
});