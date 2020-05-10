const actions = {
    addToCart: item => ({
        type: "CART:ADD_ITEM",
        payload: item
    }),
    changeCartCount: (id, count) => ({
        type: "CART:CHANGE_COUNT",
        payload: { id, count }
    }),
    removeCart: id => ({
        type: "CART:REMOVE_ITEM",
        payload: id
    }),
    fetchAddToCart: (id, name, price) => dispatch => {
        dispatch(
            actions.addToCart({
                product: {
                    _id: id,
                    name: name,
                    price: price.current
                },
                count: 1
            })
        );
    },
    fetchRemoveCart: id => dispatch => {
        dispatch(actions.removeCart(id));
    },
    fetchChangeCount: (id, count) => dispatch => {
        dispatch(actions.changeCartCount(id, count));
    }
};

export default actions;
