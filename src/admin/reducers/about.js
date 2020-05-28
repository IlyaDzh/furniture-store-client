const initialState = {
    data: null,
    isLoading: false,
    error: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ABOUT:SET_DATA":
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case "ABOUT:EDIT_DATA":
            return {
                ...state,
                data: payload
            };
        case "ABOUT:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        case "ABOUT:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
};
