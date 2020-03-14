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
    setError: bool => ({
        type: 'COMMENTS:SET_ERROR',
        payload: bool
    }),
    setIsLoading: bool => ({
        type: 'COMMENTS:SET_IS_LOADING',
        payload: bool
    }),
    fetchComments: page => dispatch => {
        dispatch(actions.setIsLoading(true));
        commentsApi.getAll(page).then(({ data }) => {
            dispatch(actions.setComments(data[0].results));
            dispatch(actions.setCurrentPage(data[0].page));
            dispatch(actions.setTotalPage(data[0].total_page));
        }).catch(() => {
            dispatch(actions.setIsLoading(false));
            dispatch(actions.setError(true));
        });
    }
}

export default actions;