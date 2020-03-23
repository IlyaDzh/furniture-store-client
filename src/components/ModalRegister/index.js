import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const ModalRegister = props => {
    return (
        <BaseModal
            className="my-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            {...props}
        >
            <BaseModal.Header closeButton>
                <BaseModal.Title id="contained-modal-title-vcenter">Регистрация</BaseModal.Title>
            </BaseModal.Header>
            <BaseModal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control placeholder="ФИО" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="Телефон" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Повторите пароль" />
                    </Form.Group>
                    <Button className="btn-orange">Зарегистрироваться</Button>
                </Form>
            </BaseModal.Body>
            <BaseModal.Footer>
                <p>
                    Нажимая на кнопку, Вы соглашаетесь с{" "}
                    <Link to="/privacy-policy" onClick={props.onHide}>
                        политикой конфиденциальности
                    </Link>
                </p>
            </BaseModal.Footer>
        </BaseModal>
    );
};

export default ModalRegister;
