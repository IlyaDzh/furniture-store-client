import React from "react";
import { Form, Button } from "react-bootstrap";

import "./LoginForm.scss";

const LoginForm = ({
    handleSubmit,
    touched,
    values,
    errors,
    handleChange,
    handleBlur
}) => (
    <div className="auth">
        <div className="auth__content">
            <div className="auth__title">Вход</div>
            <div className="auth__subtitle">
                Введите логин и пароль для входа в панель администратора
            </div>
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
                <Button
                    className="auth__btn"
                    variant="orange"
                    type="button"
                    onClick={handleSubmit}
                >
                    Войти
                </Button>
            </Form>
        </div>
    </div>
);

export default LoginForm;
