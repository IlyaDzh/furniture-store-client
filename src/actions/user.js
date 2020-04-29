// import { userApi } from "utils/api";

const actions = {
    // setCart: items => ({
    //     type: "USER:SET_CART",
    //     payload: items
    // }),
    changeCartCount: (id, count) => ({
        type: "USER:CHANGE_CART_COUNT",
        payload: { id, count }
    }),
    removeCart: id => ({
        type: "USER:REMOVE_CART",
        payload: id
    }),
    // fetchCart: () => dispatch => {
    //     userApi.getCart().then(({ data }) => {
    //         dispatch(actions.setCart(data));
    //     });
    // }
    fetchRemoveCart: id => dispatch => {
        dispatch(actions.removeCart(id));
    },
    fetchChangeCount: (id, count) => dispatch => {
        dispatch(actions.changeCartCount(id, count));
    }
};

export default actions;
