import React from "react";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const ModalLogin = ({
    formik: { handleSubmit, touched, values, errors, handleChange, handleBlur },
    show,
    onHide,
    onToggle
}) => (
    <BaseModal className="my-modal" show={show} onHide={onHide} centered>
        <BaseModal.Header closeButton>
            <BaseModal.Title>Вход</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        name="email"
                        placeholder="E-mail"
                        isInvalid={touched.email && errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        isInvalid={touched.password && errors.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="orange" type="button" onClick={handleSubmit}>
                    Войти
                </Button>
            </Form>
        </BaseModal.Body>
        <BaseModal.Footer>
            <Button variant="link" onClick={onToggle}>
                Еще не зарегистрировались?
            </Button>
        </BaseModal.Footer>
    </BaseModal>
);

export default ModalLogin;
