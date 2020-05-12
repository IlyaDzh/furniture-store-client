const initialState = {
    data: null,
    isAuth: !!window.localStorage.token_admin
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADMIN:SET_DATA":
            return {
                ...state,
                data: payload,
                isAuth: true
            };
        case "ADMIN:SET_IS_AUTH":
            return {
                ...state,
                isAuth: payload
            };
        default:
            return state;
    }
};
