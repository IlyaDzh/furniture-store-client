import { ordersApi } from "utils/api";

const actions = {
    setItems: items => ({
        type: "ORDERS:SET_ITEMS",
        payload: items
    }),
    changeStatus: item => ({
        type: "ORDERS:CHANGE_STATUS",
        payload: item
    }),
    removeItem: id => ({
        type: "ORDERS:REMOVE_ITEM",
        payload: id
    }),
    setIsLoading: bool => ({
        type: "ORDERS:SET_IS_LOADING",
        payload: bool
    }),
    setError: bool => ({
        type: "ORDERS:SET_ERROR",
        payload: bool
    }),
    fetchOrders: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        ordersApi
            .getAll()
            .then(({ data }) => {
                dispatch(actions.setItems(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    fetchChangeStatus: item => dispatch => {
        ordersApi
            .update(item)
            .then(() => {
                dispatch(actions.changeStatus(item));
            })
            .catch(() => {});
    },
    fetchDelete: id => dispatch => {
        ordersApi
            .delete(id)
            .then(() => {
                dispatch(actions.removeItem(id));
            })
            .catch(() => {});
    }
};

export default actions;
