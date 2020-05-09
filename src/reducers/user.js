const initialState = {
    data: null,
    cart: [
        {
            product: {
                _id: "5eb3f77b461fe11a6cd7cf12",
                title: "Гостиная Октавия",
                price: 482000
            },
            count: 1
        },
        {
            product: {
                _id: "5eb4242ad903d42e0c8920f0",
                title: "Стол раскладной Роза",
                price: 18850
            },
            count: 2
        },
        {
            product: {
                _id: "5eb42647d903d42e0c8920f5",
                title: "Стул металлический Zero",
                price: 2450
            },
            count: 8
        }
    ],
    isAuth: !!window.localStorage.token
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: payload,
                isAuth: true
            };
        case "USER:SET_IS_AUTH":
            return {
                ...state,
                isAuth: payload
            };
        // case "USER:SET_CART":
        //     return {
        //         ...state,
        //         cart: payload
        //     };
        case "USER:CHANGE_CART_COUNT":
            const tempCart = [...state.cart];
            const selectedProduct = tempCart.find(
                item => item.product._id === payload.id
            );
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
                cart: state.cart.filter(item => item.product._id !== payload)
            };
        default:
            return state;
    }
};
