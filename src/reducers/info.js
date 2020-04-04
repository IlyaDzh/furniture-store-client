const initialState = {
    about: null,
    service: null,
    contacts: null,
    error: false,
    isLoading: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "INFO:SET_ABOUT":
            return {
                ...state,
                about: payload,
                isLoading: false
            };
        case "INFO:SET_SERVICE":
            return {
                ...state,
                service: payload,
                isLoading: false
            };
        case "INFO:SET_CONTACTS":
            return {
                ...state,
                contacts: payload,
                isLoading: false
            };
        case "INFO:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        case "INFO:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
};
