import { commentsApi } from "utils/api";

const actions = {
    setItems: items => ({
        type: "COMMENTS:SET_ITEMS",
        payload: items
    }),
    editItem: item => ({
        type: "COMMENTS:EDIT_ITEM",
        payload: item
    }),
    removeItem: id => ({
        type: "COMMENTS:REMOVE_ITEM",
        payload: id
    }),
    setIsLoading: bool => ({
        type: "COMMENTS:SET_IS_LOADING",
        payload: bool
    }),
    setError: bool => ({
        type: "COMMENTS:SET_ERROR",
        payload: bool
    }),
    fetchComments: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        commentsApi
            .getAll()
            .then(({ data }) => {
                dispatch(actions.setItems(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    deleteComment: id => dispatch => {
        commentsApi
            .delete(id)
            .then(() => {
                dispatch(actions.removeItem(id));
            })
            .catch(() => {});
    }
};

export default actions;
