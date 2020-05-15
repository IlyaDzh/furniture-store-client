import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import getConvertPrice from "utils/helpers/getConvertPrice";
import "./MiniCart.scss";

const MiniCart = ({ count, total }) => (
    <Link to="/cart" className="mini-cart">
        <div className="mini-cart__inner">
            <div className="mini-cart__icon">
                <div className="mini-cart__icon-number">{count}</div>
                <FaShoppingCart />
            </div>
            <span>Корзина ({getConvertPrice(total)})</span>
        </div>
    </Link>
);

MiniCart.propTypes = {
    count: PropTypes.number,
    total: PropTypes.number
};

export default MiniCart;
