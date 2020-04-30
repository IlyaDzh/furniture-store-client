import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const ModalRegister = ({
    formik: { handleSubmit, touched, values, errors, handleChange, handleBlur },
    show,
    onHide
}) => (
    <BaseModal className="my-modal" show={show} onHide={onHide} centered>
        <BaseModal.Header closeButton>
            <BaseModal.Title>Регистрация</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        name="fullname"
                        placeholder="ФИО"
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
                        placeholder="Номер телефона"
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
                <Form.Group>
                    <Form.Control
                        name="password_2"
                        type="password"
                        placeholder="Повторите пароль"
                        isInvalid={touched.password_2 && errors.password_2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password_2}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password_2}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="orange" type="button" onClick={handleSubmit}>
                    Зарегистрироваться
                </Button>
            </Form>
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

export default ModalRegister;
