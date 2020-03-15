const initialState = {
    items: [],
    currentItem: {},
    currentPage: 1,
    totalPage: 1,
    error: false,
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'NEWS:SET_ITEMS':
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case 'NEWS:SET_CURRENT_ITEM':
            return {
                ...state,
                currentItem: payload,
                isLoading: false
            };
        case 'NEWS:SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: payload
            };
        case 'NEWS:SET_TOTAL_PAGE':
            return {
                ...state,
                totalPage: payload
            };
        case 'NEWS:SET_ERROR':
            return {
                ...state,
                error: payload
            };
        case 'NEWS:SET_IS_LOADING':
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
}