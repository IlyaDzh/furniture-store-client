import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import { Section } from "components";
import orderCallBg from "assets/home/order/bg.jpg";
import "./OrderCall.scss";

const OrderCall = ({
    formik: { handleSubmit, touched, values, errors, handleChange, handleBlur },
    ready
}) => (
    <Section
        className="order-call"
        style={{
            background: `#e7eced url(${orderCallBg}) no-repeat center center`,
            backgroundSize: "cover"
        }}
    >
        <h3 className="order-call__title">Нужна консультация?</h3>
        {!ready ? (
            <>
                <h4 className="order-call__subtitle">
                    Заполните форму, и наш менеджер свяжется с Вами в течение 15
                    минут.
                </h4>
                <Form onSubmit={handleSubmit} className="order-call__form">
                    <Form.Group as={Row}>
                        <Form.Group as={Col} md={4}>
                            <Form.Control
                                name="fullname"
                                placeholder="Ваше имя"
                                isInvalid={touched.fullname && errors.fullname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullname}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.fullname}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md={4}>
                            <Form.Control
                                name="number"
                                placeholder="Телефон"
                                isInvalid={touched.number && errors.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.number}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.number}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md={4}>
                            <Button
                                className="btn-orange"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Заказать звонок
                            </Button>
                        </Form.Group>
                    </Form.Group>
                </Form>
            </>
        ) : (
            <p className="order-call--ready">
                Спасибо! Ваша заявка отправлена!
                <br />
                Наш менеджер свяжется с вами в течение 15 минут.
                <br />
                Пожалуйста, ожидайте!
            </p>
        )}
    </Section>
);

export default OrderCall;
