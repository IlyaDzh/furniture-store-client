const initialState = {
    // comments: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        // case "HOME:SET_COMMENTS":
        //     return {
        //         ...state,
        //         comments: payload
        //     };
        default:
            return state;
    }
};
