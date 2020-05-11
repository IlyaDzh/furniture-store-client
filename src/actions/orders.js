import { ordersApi } from "utils/api";

const actions = {
    setCurrentOrder: item => ({
        type: "ORDERS:SET_CURRENT_ITEM",
        payload: item
    }),
    setError: bool => ({
        type: "ORDERS:SET_ERROR",
        payload: bool
    }),
    setIsLoading: bool => ({
        type: "ORDERS:SET_IS_LOADING",
        payload: bool
    }),
    fetchCurrentOrder: id => dispatch => {
        dispatch(actions.setIsLoading(true));
        ordersApi
            .getById(id)
            .then(({ data }) => {
                dispatch(actions.setCurrentOrder(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    }
};

export default actions;
