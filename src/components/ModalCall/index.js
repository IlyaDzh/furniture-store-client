import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

import { ReadyInModal } from "components";

const ModalCall = ({
    formik: { handleSubmit, touched, values, errors, handleChange, handleBlur },
    ready,
    show,
    onHide
}) => (
    <BaseModal className="my-modal" show={show} onHide={onHide} centered>
        <BaseModal.Header closeButton>
            <BaseModal.Title>Заказать звонок</BaseModal.Title>
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
                    <Button
                        className="btn-orange"
                        type="button"
                        onClick={handleSubmit}
                    >
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

export default ModalCall;
