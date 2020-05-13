import { productsApi } from "client/utils/api";

const actions = {
    setProducts: items => ({
        type: "PRODUCTS:SET_ITEMS",
        payload: items
    }),
    setCurrentProduct: item => ({
        type: "PRODUCTS:SET_CURRENT_ITEM",
        payload: item
    }),
    setNewProducts: items => ({
        type: "PRODUCTS:SET_NEW_ITEMS",
        payload: items
    }),
    setPopularProducts: items => ({
        type: "PRODUCTS:SET_POPULAR_ITEMS",
        payload: items
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
    fetchPopularProducts: () => dispatch => {
        productsApi.getPopularProducts().then(({ data }) => {
            dispatch(actions.setPopularProducts(data));
        });
    }
};

export default actions;
