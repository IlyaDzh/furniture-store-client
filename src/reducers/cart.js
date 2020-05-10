const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "CART:ADD_ITEM":
            const resultAdd = [...state.items, payload];
            window.localStorage.setItem("cart", JSON.stringify(resultAdd));

            return {
                ...state,
                items: resultAdd
            };
        case "CART:CHANGE_COUNT":
            const tempCart = [...state.items];
            const selectedProduct = tempCart.find(
                item => item.product._id === payload.id
            );
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count =
                payload.count > 9 ? 9 : payload.count < 1 ? 1 : payload.count;
            window.localStorage.setItem("cart", JSON.stringify([...tempCart]));

            return {
                ...state,
                items: [...tempCart]
            };
        case "CART:REMOVE_ITEM":
            const resultRemove = state.items.filter(
                item => item.product._id !== payload
            );
            window.localStorage.setItem("cart", JSON.stringify(resultRemove));

            return {
                ...state,
                items: resultRemove
            };
        default:
            return state;
    }
};
