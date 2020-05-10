const initialState = {
    data: null,
    isAuth: !!window.localStorage.token
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: payload,
                isAuth: true
            };
        case "USER:ADD_ORDER":
            const tempData = state.data;
            tempData.orders.push(payload);

            return {
                ...state,
                data: tempData
            };
        case "USER:SET_IS_AUTH":
            return {
                ...state,
                isAuth: payload
            };
        default:
            return state;
    }
};
