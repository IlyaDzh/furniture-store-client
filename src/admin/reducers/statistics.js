const initialState = {
    users: null,
    orders: null,
    comments: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "STATISTICS:SET_USERS":
            return {
                ...state,
                users: payload
            };
        case "STATISTICS:SET_ORDERS":
            return {
                ...state,
                orders: payload
            };
        case "STATISTICS:SET_COMMENTS":
            return {
                ...state,
                comments: payload
            };
        default:
            return state;
    }
};
