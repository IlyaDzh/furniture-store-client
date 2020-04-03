const initialState = {
    about: null,
    service: null,
    contacts: null,
    error: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "INFO:SET_ABOUT":
            return {
                ...state,
                about: payload
            };
        case "INFO:SET_SERVICE":
            return {
                ...state,
                service: payload
            };
        case "INFO:SET_CONTACTS":
            return {
                ...state,
                contacts: payload
            };
        case "INFO:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
};
