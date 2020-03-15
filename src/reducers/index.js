import { combineReducers } from 'redux';

import comments from './comments';
import news from './news';

export default combineReducers({
    news,
    comments
});