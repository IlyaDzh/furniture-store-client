import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const ModalCall = ({
    handleSubmit,
    touched,
    values,
    errors,
    handleChange,
    handleBlur,
    show,
    setShowCall
}) => (
    <BaseModal
        className="my-modal"
        show={show}
        onHide={() => setShowCall(false)}
        centered
    >
        <BaseModal.Header closeButton>
            <BaseModal.Title>Заказать звонок</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>
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
                <Button variant="orange" type="button" onClick={handleSubmit}>
                    Отправить
                </Button>
            </Form>
        </BaseModal.Body>
        <BaseModal.Footer>
            <p>
                Нажимая на кнопку, Вы соглашаетесь с{" "}
                <Link to="/privacy-policy" onClick={() => setShowCall(false)}>
                    политикой конфиденциальности
                </Link>
            </p>
        </BaseModal.Footer>
    </BaseModal>
);

export default ModalCall;
