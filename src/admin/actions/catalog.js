import { catalogApi, productsApi } from "utils/api";

const actions = {
    setItems: items => ({
        type: "CATALOG:SET_ITEMS",
        payload: items
    }),
    setCurrentId: id => ({
        type: "CATALOG:SET_CURRENT_ID",
        payload: id
    }),
    addItem: item => ({
        type: "CATALOG:ADD_ITEM",
        payload: item
    }),
    editItem: item => ({
        type: "CATALOG:EDIT_ITEM",
        payload: item
    }),
    removeItem: id => ({
        type: "CATALOG:REMOVE_ITEM",
        payload: id
    }),
    setIsLoading: bool => ({
        type: "CATALOG:SET_IS_LOADING",
        payload: bool
    }),
    setError: bool => ({
        type: "CATALOG:SET_ERROR",
        payload: bool
    }),
    fetchCatalog: path => dispatch => {
        dispatch(actions.setIsLoading(true));
        catalogApi
            .getByPath(path)
            .then(({ data }) => {
                dispatch(actions.setItems(data.products));
                dispatch(actions.setCurrentId(data._id));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    addProduct: postData => dispatch => {
        return productsApi
            .create(postData)
            .then(({ data }) => {
                dispatch(actions.addItem(data));
            })
            .catch(() => {});
    },
    deleteProduct: id => dispatch => {
        productsApi
            .delete(id)
            .then(() => {
                dispatch(actions.removeItem(id));
            })
            .catch(() => {});
    },
    editProduct: item => dispatch => {
        return productsApi
            .edit(item)
            .then(({ data }) => {
                dispatch(actions.editItem(data));
            })
            .catch(() => {});
    }
};

export default actions;
