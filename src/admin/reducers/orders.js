const initialState = {
    items: null,
    isLoading: false,
    error: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ORDERS:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case "ORDERS:CHANGE_STATUS":
            const temp = [...state.items];
            const selected = temp.find(item => item._id === payload.id);
            const index = temp.indexOf(selected);
            const item = temp[index];
            item.status = payload.status;

            return {
                ...state,
                items: [...temp]
            };
        case "ORDERS:REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload)
            };
        case "ORDERS:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        case "ORDERS:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
};
