const initialState = {
    items: null,
    currentId: null,
    isLoading: false,
    error: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "CATALOG:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case "CATALOG:SET_CURRENT_ID":
            return {
                ...state,
                currentId: payload
            };
        case "CATALOG:ADD_ITEM":
            return {
                ...state,
                items: [payload, ...state.items]
            };
        case "CATALOG:REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload)
            };
        case "CATALOG:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        case "CATALOG:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
};
