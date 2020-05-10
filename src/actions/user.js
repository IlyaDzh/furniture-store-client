import { userApi } from "utils/api";

const actions = {
    setData: data => ({
        type: "USER:SET_DATA",
        payload: data
    }),
    setIsAuth: bool => ({
        type: "USER:SET_IS_AUTH",
        payload: bool
    }),
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
            window.localStorage["token"] = token;
            dispatch(actions.fetchUserData());
            dispatch(actions.setIsAuth(true));
            return data;
        });
    },
    fetchUserSignOut: () => dispatch => {
        dispatch(actions.setIsAuth(false));
        delete window.localStorage.token;
    }
};

export default actions;
