import React from "react";
import { Col, Form, Button } from "react-bootstrap";

import "./Comments.scss";

const Comments = ({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
}) => (
    <div className="product-comments">
        <h5 className="product-comments__title">Нам важно ваше мнение</h5>
        <Form className="product-comments__form" onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md={6} className="form-col">
                    <Form.Group>
                        <Form.Control
                            name="fullname"
                            placeholder="Пожалуйста, представьтесь"
                            isInvalid={touched.fullname && errors.fullname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullname}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.fullname}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name="email"
                            placeholder="Введите ваш E-mail"
                            isInvalid={touched.email && errors.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Group>
                <Form.Group as={Col} md={6} className="form-col">
                    <Form.Control
                        as="textarea"
                        className="form__textarea"
                        name="comment"
                        placeholder="Ваш отзыв"
                        rows="3"
                        isInvalid={touched.comment && errors.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comment}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.comment}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm={12} md={4} className="form-col-btn">
                    <Button className="btn-orange" onClick={handleSubmit}>
                        Отправить
                    </Button>
                </Form.Group>
            </Form.Row>
        </Form>
    </div>
);

export default Comments;
