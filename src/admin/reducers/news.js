const initialState = {
    items: null,
    isLoading: false,
    error: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "NEWS:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case "NEWS:ADD_ITEM":
            return {
                ...state,
                items: [payload, ...state.items]
            };
        case "NEWS:REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload)
            };
        case "NEWS:EDIT_ITEM":
            const temp = [...state.items];
            const selected = temp.find(item => item._id === payload._id);
            const index = temp.indexOf(selected);
            temp[index] = payload;

            return {
                ...state,
                items: [...temp]
            };
        case "NEWS:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        case "NEWS:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
};
