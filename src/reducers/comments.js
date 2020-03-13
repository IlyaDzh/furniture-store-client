const initialState = {
    items: [],
    currentPage: 1,
    totalPage: 1,
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'COMMENTS:SET_ITEMS':
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case 'COMMENTS:SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: payload
            };
        case 'COMMENTS:SET_TOTAL_PAGE':
            return {
                ...state,
                totalPage: payload
            };
        case 'COMMENTS:SET_IS_LOADING':
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
}