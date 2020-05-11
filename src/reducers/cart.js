const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "CART:ADD_ITEM":
            const tempAddCart = [...state.items];
            const foundProduct = tempAddCart.find(
                item => item.product._id === payload.product._id
            );
            if (foundProduct) {
                const indexFound = tempAddCart.indexOf(foundProduct);
                const foundItem = tempAddCart[indexFound];
                foundItem.count += payload.count;
            } else {
                tempAddCart.push(payload);
            }
            window.localStorage.setItem("cart", JSON.stringify(tempAddCart));

            return {
                ...state,
                items: tempAddCart
            };
        case "CART:CHANGE_COUNT":
            const tempChangeCart = [...state.items];
            const selectedProduct = tempChangeCart.find(
                item => item.product._id === payload.id
            );
            const indexSelected = tempChangeCart.indexOf(selectedProduct);
            const selectedItem = tempChangeCart[indexSelected];
            selectedItem.count =
                payload.count > 20 ? 20 : payload.count < 1 ? 1 : payload.count;
            window.localStorage.setItem("cart", JSON.stringify([...tempChangeCart]));

            return {
                ...state,
                items: [...tempChangeCart]
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
        case "CART:CLEAR_ITEMS":
            window.localStorage.removeItem("cart");

            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
};
