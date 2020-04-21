import React from "react";
import PropTypes from "prop-types";
import { Col, Form, Button } from "react-bootstrap";

import "./Comments.scss";

const Comments = props => (
    <div className="product-comments">
        <h5 className="product-comments__title">Нам важно ваше мнение</h5>
        <Form className="product-comments__form">
            <Form.Row>
                <Form.Group as={Col} md={6}>
                    <Form.Group>
                        <Form.Control placeholder="Пожалуйста, представьтесь" />
                    </Form.Group>
                    <Form.Group style={{ marginBottom: "0" }}>
                        <Form.Control
                            type="email"
                            placeholder="Введите ваш E-mail"
                        />
                    </Form.Group>
                </Form.Group>
                <Form.Group as={Col} md={6}>
                    <Form.Control
                        placeholder="Ваш отзыв"
                        as="textarea"
                        rows="3"
                        style={{ height: "100%" }}
                    />
                </Form.Group>
                <Form.Group as={Col} sm={12} md={4} style={{ margin: "0 auto" }}>
                    <Button className="btn-orange">Отправить</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    </div>
);

Comments.propTypes = {};

export default Comments;
