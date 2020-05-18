import { statisticsApi } from "utils/api";

const actions = {
    setUsers: items => ({
        type: "STATISTICS:SET_USERS",
        payload: items
    }),
    setOrders: items => ({
        type: "STATISTICS:SET_ORDERS",
        payload: items
    }),
    setComments: items => ({
        type: "STATISTICS:SET_COMMENTS",
        payload: items
    }),
    fetchCountUsers: () => dispatch => {
        statisticsApi
            .getUsers()
            .then(({ data }) => {
                dispatch(actions.setUsers(data));
            })
            .catch(() => {});
    },
    fetchCountOrders: () => dispatch => {
        statisticsApi
            .getOrders()
            .then(({ data }) => {
                dispatch(actions.setOrders(data));
            })
            .catch(() => {});
    },
    fetchCountComments: () => dispatch => {
        statisticsApi
            .getComments()
            .then(({ data }) => {
                dispatch(actions.setComments(data));
            })
            .catch(() => {});
    }
};

export default actions;
