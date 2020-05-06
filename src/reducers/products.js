const initialState = {
    items: [],
    currentItem: null,
    error: false,
    isLoading: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "PRODUCTS:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case "PRODUCTS:SET_CURRENT_ITEM":
            return {
                ...state,
                currentItem: payload,
                isLoading: false
            };
        case "PRODUCTS:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        case "PRODUCTS:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
};
