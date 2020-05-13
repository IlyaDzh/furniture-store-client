import { commentsApi } from "client/utils/api";

const actions = {
    setComments: items => ({
        type: "COMMENTS:SET_ITEMS",
        payload: items
    }),
    setLastComments: items => ({
        type: "COMMENTS:SET_LAST_ITEMS",
        payload: items
    }),
    setCurrentPage: page => ({
        type: "COMMENTS:SET_CURRENT_PAGE",
        payload: page
    }),
    setTotalPage: page => ({
        type: "COMMENTS:SET_TOTAL_PAGE",
        payload: page
    }),
    setError: bool => ({
        type: "COMMENTS:SET_ERROR",
        payload: bool
    }),
    setIsLoading: bool => ({
        type: "COMMENTS:SET_IS_LOADING",
        payload: bool
    }),
    fetchComments: page => dispatch => {
        dispatch(actions.setIsLoading(true));
        commentsApi
            .getAll(page)
            .then(({ data }) => {
                dispatch(actions.setComments(data.results));
                dispatch(actions.setCurrentPage(data.page));
                dispatch(actions.setTotalPage(data.total_page));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    fetchLastComments: () => dispatch => {
        commentsApi.getLastComments().then(({ data }) => {
            dispatch(actions.setLastComments(data));
        });
    }
};

export default actions;
