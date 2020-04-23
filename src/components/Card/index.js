import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { Card as BaseCard, Button } from "react-bootstrap";

import "./Card.scss";

const Card = ({ id, image, title, price, oldPrice }) => (
    <BaseCard className="card-item">
        <Link to={`catalog/${id}`}>
            <BaseCard.Img variant="top" src={require(`assets/${image}`)} />
        </Link>
        <BaseCard.Body>
            <Link to={`catalog/${id}`}>
                <BaseCard.Title>{title}</BaseCard.Title>
            </Link>
            <BaseCard.Text>
                {price} руб.
                <span>{oldPrice} руб.</span>
            </BaseCard.Text>
            <Button className="card-btn btn-orange">
                <FaShoppingCart style={{ fontSize: "18", marginRight: "5" }} />В
                корзину
            </Button>
        </BaseCard.Body>
    </BaseCard>
);

Card.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    oldPrice: PropTypes.string
};

export default Card;
