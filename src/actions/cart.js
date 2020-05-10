const actions = {
    addToCart: (id, name, price) => ({
        type: "CART:ADD_ITEM",
        payload: {
            product: {
                _id: id,
                name: name,
                price: price.current
            },
            count: 1
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
