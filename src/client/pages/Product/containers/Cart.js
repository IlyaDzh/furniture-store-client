import React from "react";
import { connect } from "react-redux";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";

import { Cart as BaseCart } from "../components";
import { cartActions } from "actions";

const Cart = ({ addToCart, currentProduct: { _id, name, price } }) => {
    const handleClick = countRef => {
        addToCart(_id, name, price, countRef.current.value);
        toast.success(
            <>
                <BsFillInfoCircleFill />
                <span>Товар добавлен в корзину</span>
            </>
        );
    };

    return <BaseCart handleClick={handleClick} />;
};

export default connect(
    ({ products }) => ({
        currentProduct: products.currentItem
    }),
    cartActions
)(Cart);
