import { commentsApi } from 'utils/api';

const actions = {
    setComments: items => ({
        type: 'COMMENTS:SET_ITEMS',
        payload: items
    }),
    setCurrentPage: page => ({
        type: 'COMMENTS:SET_CURRENT_PAGE',
        payload: page
    }),
    setTotalPage: page => ({
        type: 'COMMENTS:SET_TOTAL_PAGE',
        payload: page
    }),
    setIsLoading: bool => ({
        type: 'COMMENTS:SET_IS_LOADING',
        payload: bool
    }),
    fetchComments: page => dispatch => {
        dispatch(actions.setIsLoading(true));
        commentsApi.getAll(page).then(({ data }) => {
            dispatch(actions.setComments(data[0].results));
            dispatch(actions.setTotalPage(data[0].total_page));
        }).catch(() => {
            dispatch(actions.setIsLoading(false));
        });
    }
}

export default actions;