const initialState = {
    data: null,
    cart: [
        {
            _id: "h2fdsf312a",
            title: "Малая гостиная Матильда",
            price: 216740,
            count: 1
        },
        {
            _id: "94gf8ads32",
            title: "Стул металлический Zero (изумруд)",
            price: 4040,
            count: 3
        },
        {
            _id: "6qldf932n1",
            title: "Спальня Натали с 6-дверным шкафом (белый глянец)",
            price: 108723,
            count: 1
        }
    ],
    error: false,
    isLoading: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: payload
            };
        case "USER:SET_CART":
            return {
                ...state,
                cart: payload
            };
        case "USER:CHANGE_CART_COUNT":
            const tempCart = [...state.cart];
            const selectedProduct = tempCart.find(item => item._id === payload.id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count =
                payload.count > 9 ? 9 : payload.count < 1 ? 1 : payload.count;

            return {
                ...state,
                cart: [...tempCart]
            };
        case "USER:REMOVE_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== payload)
            };
        case "USER:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        case "USER:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
};
