const actions = {
    addToCart: (id, name, price, count = 1) => ({
        type: "CART:ADD_ITEM",
        payload: {
            product: {
                _id: id,
                name: name,
                price: price.current
            },
            count: Number(count)
        }
    }),
    changeCount: (id, count) => ({
        type: "CART:CHANGE_COUNT",
        payload: { id, count }
    }),
    removeItem: id => ({
        type: "CART:REMOVE_ITEM",
        payload: id
    }),
    clearCart: () => ({
        type: "CART:CLEAR_ITEMS"
    })
};

export default actions;
