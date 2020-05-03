import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

import { ReadyInModal } from "components";

const ModalOneClick = ({
    handleSubmit,
    touched,
    values,
    errors,
    handleChange,
    handleBlur,
    ready,
    show,
    onHide
}) => (
    <BaseModal className="my-modal" show={show} onHide={onHide} centered>
        <BaseModal.Header closeButton>
            <BaseModal.Title>Заказать товар в 1 клик</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>
            {!ready ? (
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
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
                    <Form.Group>
                        <Form.Control
                            name="phone"
                            placeholder="Телефон"
                            isInvalid={touched.phone && errors.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            name="comment"
                            placeholder="Ваш комментарий"
                            isInvalid={touched.comment && errors.comment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.comment}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.comment}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="orange" type="button" onClick={handleSubmit}>
                        Отправить
                    </Button>
                </Form>
            ) : (
                <ReadyInModal />
            )}
        </BaseModal.Body>
        <BaseModal.Footer>
            <p>
                Нажимая на кнопку, Вы соглашаетесь с{" "}
                <Link to="/privacy-policy" onClick={onHide}>
                    политикой конфиденциальности
                </Link>
            </p>
        </BaseModal.Footer>
    </BaseModal>
);

export default ModalOneClick;
