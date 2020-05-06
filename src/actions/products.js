import { productsApi } from "utils/api";

const actions = {
    setProducts: items => ({
        type: "PRODUCTS:SET_ITEMS",
        payload: items
    }),
    setCurrentProduct: item => ({
        type: "PRODUCTS:SET_CURRENT_ITEM",
        payload: item
    }),
    setNewProducts: item => ({
        type: "PRODUCTS:SET_NEW_ITEM",
        payload: item
    }),
    setHitProducts: item => ({
        type: "PRODUCTS:SET_HIT_ITEM",
        payload: item
    }),
    setError: bool => ({
        type: "PRODUCTS:SET_ERROR",
        payload: bool
    }),
    setIsLoading: bool => ({
        type: "PRODUCTS:SET_IS_LOADING",
        payload: bool
    }),
    fetchProducts: page => dispatch => {
        dispatch(actions.setIsLoading(true));
        productsApi
            .getAll(page)
            .then(({ data }) => {
                dispatch(actions.setProducts(data.results));
                dispatch(actions.setIsLoading(false));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    fetchCurrentProduct: id => dispatch => {
        dispatch(actions.setIsLoading(true));
        productsApi
            .getById(id)
            .then(({ data }) => {
                dispatch(actions.setCurrentProduct(data));
                dispatch(actions.setIsLoading(false));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    fetchNewProducts: () => dispatch => {
        productsApi.getNewProducts().then(({ data }) => {
            dispatch(actions.setNewProducts(data));
        });
    },
    fetchHitProducts: () => dispatch => {
        productsApi.getHitProducts().then(({ data }) => {
            dispatch(actions.setHitProducts(data));
        });
    }
};

export default actions;
