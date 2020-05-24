import { newsApi } from "utils/api";

const actions = {
    setItems: items => ({
        type: "NEWS:SET_ITEMS",
        payload: items
    }),
    addItem: item => ({
        type: "NEWS:ADD_ITEM",
        payload: item
    }),
    editItem: item => ({
        type: "NEWS:EDIT_ITEM",
        payload: item
    }),
    removeItem: id => ({
        type: "NEWS:REMOVE_ITEM",
        payload: id
    }),
    setIsLoading: bool => ({
        type: "NEWS:SET_IS_LOADING",
        payload: bool
    }),
    setError: bool => ({
        type: "NEWS:SET_ERROR",
        payload: bool
    }),
    fetchNews: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        newsApi
            .getAll()
            .then(({ data }) => {
                dispatch(actions.setItems(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    addNews: postData => dispatch => {
        return newsApi
            .create(postData)
            .then(({ data }) => {
                dispatch(actions.addItem(data));
            })
            .catch(() => {});
    },
    deleteNews: id => dispatch => {
        newsApi
            .delete(id)
            .then(() => {
                dispatch(actions.removeItem(id));
            })
            .catch(() => {});
    },
    editNews: item => dispatch => {
        return newsApi
            .edit(item)
            .then(({ data }) => {
                dispatch(actions.editItem(data));
            })
            .catch(() => {});
    }
};

export default actions;
