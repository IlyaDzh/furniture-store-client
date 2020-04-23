import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Form, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";

import { ModalOneClick } from "containers";
import "./Cart.scss";

const Cart = ({ handleClick }) => {
    const [showFastBuy, setShowFastBuy] = useState(false);
    const countRef = useRef();

    return (
        <div className="product-cart">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} xs="3">
                        <Form.Control
                            ref={countRef}
                            type="number"
                            min={1}
                            max={9}
                            defaultValue="1"
                        />
                    </Form.Group>
                    <Form.Group as={Col} xs="9">
                        <Button
                            className="btn-orange"
                            onClick={() => handleClick(countRef)}
                        >
                            <FaShoppingCart
                                style={{
                                    fontSize: "18",
                                    marginRight: "5"
                                }}
                            />
                            В корзину
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
            <Link
                to="#buy"
                className="product-cart__buy"
                onClick={() => setShowFastBuy(true)}
            >
                <MdTouchApp
                    style={{
                        fontSize: "20",
                        marginRight: "3",
                        marginBottom: "6"
                    }}
                />
                Купить в 1 клик
            </Link>
            <ModalOneClick show={showFastBuy} onHide={() => setShowFastBuy(false)} />
        </div>
    );
};

Cart.propTypes = {
    handleClick: PropTypes.func
};

export default Cart;
