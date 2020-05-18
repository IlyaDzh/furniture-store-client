const initialState = {
    items: null,
    isLoading: false,
    error: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "COMMENTS:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case "COMMENTS:EDIT_ITEM":
            const temp = [...state.items];
            const selected = temp.find(item => item._id === payload.id);
            const index = temp.indexOf(selected);
            temp[index] = payload;

            return {
                ...state,
                items: [...temp]
            };
        case "COMMENTS:REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload)
            };
        case "COMMENTS:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        case "COMMENTS:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
};
