import { userApi } from "utils/api";

const actions = {
    setData: data => ({
        type: "USER:SET_DATA",
        payload: data
    }),
    // setCart: items => ({
    //     type: "USER:SET_CART",
    //     payload: items
    // }),
    setIsAuth: bool => ({
        type: "USER:SET_IS_AUTH",
        payload: bool
    }),
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
    fetchUserData: () => dispatch => {
        userApi
            .getMe()
            .then(({ data }) => {
                dispatch(actions.setData(data));
            })
            .catch(() => {
                dispatch(actions.setIsAuth(false));
                delete window.localStorage.token;
            });
    },
    fetchUserSignUp: postData => () => {
        return userApi.signUp(postData);
    },
    fetchUserSignIn: postData => dispatch => {
        return userApi.signIn(postData).then(({ data }) => {
            const { token } = data;
            window.axios.defaults.headers.common["token"] = token;
            window.localStorage["token"] = token;
            dispatch(actions.fetchUserData());
            dispatch(actions.setIsAuth(true));
            return data;
        });
    },
    fetchUserSignOut: () => dispatch => {
        dispatch(actions.setIsAuth(false));
        delete window.localStorage.token;
    },
    fetchRemoveCart: id => dispatch => {
        dispatch(actions.removeCart(id));
    },
    fetchChangeCount: (id, count) => dispatch => {
        dispatch(actions.changeCartCount(id, count));
    }
};

export default actions;
