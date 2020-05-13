import { userApi } from "client/utils/api";

const actions = {
    setData: data => ({
        type: "USER:SET_DATA",
        payload: data
    }),
    addOrder: data => ({
        type: "USER:ADD_ORDER",
        payload: data
    }),
    setIsAuth: bool => ({
        type: "USER:SET_IS_AUTH",
        payload: bool
    }),
    setIsLoading: bool => ({
        type: "USER:SET_IS_LOADING",
        payload: bool
    }),
    fetchUserData: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        userApi
            .getMe()
            .then(({ data }) => {
                dispatch(actions.setData(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setIsAuth(false));
                delete window.localStorage.token;
            });
    },
    updateUserData: postData => dispatch => {
        return userApi.updateMe(postData).then(({ data }) => {
            dispatch(actions.setData(data));
        });
    },
    fetchUserSignUp: postData => () => {
        return userApi.signUp(postData);
    },
    fetchUserSignIn: postData => dispatch => {
        return userApi.signIn(postData).then(({ data }) => {
            const { token } = data;
            window.axios.defaults.headers.common["token"] = token;
            window.localStorage.setItem("token", token);
            dispatch(actions.fetchUserData());
            dispatch(actions.setIsAuth(true));
            return data;
        });
    },
    fetchUserSignOut: () => dispatch => {
        dispatch(actions.setIsAuth(false));
        window.axios.defaults.headers.common["token"] = null;
        window.localStorage.removeItem("token");
    }
};

export default actions;
