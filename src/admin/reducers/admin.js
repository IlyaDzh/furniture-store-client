const initialState = {
    isAuth: !!window.localStorage.admin && !!window.localStorage.token
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADMIN:SET_IS_AUTH":
            return {
                ...state,
                isAuth: payload
            };
        default:
            return state;
    }
};
