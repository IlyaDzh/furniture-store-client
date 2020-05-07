import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { Card as BaseCard, Button } from "react-bootstrap";

import getConvertPrice from "utils/helpers/getConvertPrice";
import "./CardProduct.scss";

const CardProduct = ({ _id, images, name, price }) => (
    <BaseCard className="card-product">
        <Link to={`/product/${_id}`}>
            <BaseCard.Img variant="top" src={images[0]} />
        </Link>
        <BaseCard.Body>
            <Link to={`/product/${_id}`}>
                <BaseCard.Title>{name}</BaseCard.Title>
            </Link>
            <BaseCard.Text>
                {getConvertPrice(price.current)} руб.
                {price.old && <span>{getConvertPrice(price.old)} руб.</span>}
            </BaseCard.Text>
            <Button className="card-btn" variant="orange">
                <FaShoppingCart style={{ fontSize: "18", marginRight: "5" }} />В
                корзину
            </Button>
        </BaseCard.Body>
    </BaseCard>
);

CardProduct.propTypes = {
    _id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired
};

export default CardProduct;
