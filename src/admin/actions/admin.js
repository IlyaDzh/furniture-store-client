import { userApi } from "utils/api";

const actions = {
    setIsAuth: bool => ({
        type: "ADMIN:SET_IS_AUTH",
        payload: bool
    }),
    fetchAdminSignIn: postData => dispatch => {
        return userApi.signIn(postData).then(({ data }) => {
            const { token, admin } = data;
            if (admin) {
                window.axios.defaults.headers.common["token"] = token;
                window.localStorage.setItem("token", token);
                window.axios.defaults.headers.common["admin"] = admin;
                window.localStorage.setItem("admin", admin);
                dispatch(actions.setIsAuth(true));
            }
            return data;
        });
    },
    fetchAdminSignOut: () => dispatch => {
        dispatch(actions.setIsAuth(false));
        window.axios.defaults.headers.common["admin"] = null;
        window.localStorage.removeItem("admin");
    }
};

export default actions;
