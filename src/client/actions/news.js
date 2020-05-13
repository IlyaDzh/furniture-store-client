import { newsApi } from "client/utils/api";

const actions = {
    setNews: items => ({
        type: "NEWS:SET_ITEMS",
        payload: items
    }),
    setCurrentNews: item => ({
        type: "NEWS:SET_CURRENT_ITEM",
        payload: item
    }),
    setLastNews: item => ({
        type: "NEWS:SET_LAST_ITEMS",
        payload: item
    }),
    setCurrentPage: page => ({
        type: "NEWS:SET_CURRENT_PAGE",
        payload: page
    }),
    setTotalPage: page => ({
        type: "NEWS:SET_TOTAL_PAGE",
        payload: page
    }),
    setError: bool => ({
        type: "NEWS:SET_ERROR",
        payload: bool
    }),
    setIsLoading: bool => ({
        type: "NEWS:SET_IS_LOADING",
        payload: bool
    }),
    fetchNews: page => dispatch => {
        dispatch(actions.setIsLoading(true));
        newsApi
            .getAll(page)
            .then(({ data }) => {
                dispatch(actions.setNews(data.results));
                dispatch(actions.setCurrentPage(data.page));
                dispatch(actions.setTotalPage(data.total_page));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    fetchCurrentNews: id => dispatch => {
        dispatch(actions.setIsLoading(true));
        newsApi
            .getById(id)
            .then(({ data }) => {
                if (data) {
                    dispatch(actions.setCurrentNews(data));
                } else {
                    dispatch(actions.setIsLoading(false));
                    dispatch(actions.setError(true));
                }
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    fetchLastNews: () => dispatch => {
        newsApi.getLastNews().then(({ data }) => {
            dispatch(actions.setLastNews(data));
        });
    }
};

export default actions;
