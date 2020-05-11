import React from "react";
import { Col, Form, Button } from "react-bootstrap";

import "./Order.scss";

const Order = ({
    handleSubmit,
    touched,
    values,
    errors,
    handleChange,
    handleBlur,
    cart
}) => {
    const isEmpty = !cart.length;

    return (
        <div className="cart-order">
            <h4 className="cart-order__title">Оформление заказа</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md={4}>
                        <Form.Control
                            name="fullname"
                            placeholder="Ваше имя"
                            isInvalid={touched.fullname && errors.fullname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullname || ""}
                            disabled={isEmpty}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.fullname}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md={4}>
                        <Form.Control
                            name="phone"
                            placeholder="Телефон"
                            isInvalid={touched.phone && errors.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone || ""}
                            disabled={isEmpty}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md={4}>
                        <Form.Control
                            name="email"
                            placeholder="E-mail"
                            isInvalid={touched.email && errors.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email || ""}
                            disabled={isEmpty}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={4}>
                        <Form.Control
                            name="address"
                            placeholder="Адрес"
                            isInvalid={touched.address && errors.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address || ""}
                            disabled={isEmpty}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.address}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md={4}>
                        <Form.Control
                            as="select"
                            name="payment"
                            onChange={handleChange}
                            value={values.payment}
                            disabled={isEmpty}
                        >
                            <option>Оплата наличными</option>
                            <option>Оплата по счету</option>
                            <option>Банковской картой</option>
                            <option>Оплата в рассрочку</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md={4}>
                        <Form.Control
                            as="select"
                            name="delivery"
                            onChange={handleChange}
                            value={values.delivery}
                            disabled={isEmpty}
                        >
                            <option>Самовывоз</option>
                            <option>Курьером по Москве</option>
                            <option>Транспортной компанией</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        name="comment"
                        placeholder="Комментарий к заказу"
                        isInvalid={touched.comment && errors.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comment}
                        disabled={isEmpty}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.comment}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    variant="orange"
                    type="button"
                    onClick={handleSubmit}
                    disabled={isEmpty}
                >
                    Оформить заказ
                </Button>
            </Form>
        </div>
    );
};

export default Order;
