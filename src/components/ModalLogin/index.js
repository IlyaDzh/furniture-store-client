import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const ModalLogin = props => (
    <BaseModal className="my-modal" centered {...props}>
        <BaseModal.Header closeButton>
            <BaseModal.Title>Вход</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>
            <Form>
                <Form.Group>
                    <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Пароль" />
                </Form.Group>
                <Button className="btn-orange">Войти</Button>
            </Form>
        </BaseModal.Body>
        <BaseModal.Footer>
            <p>
                Еще не{" "}
                <Link to="#register" onClick={props.onToggle}>
                    зарегистрировались
                </Link>
                ?
            </p>
        </BaseModal.Footer>
    </BaseModal>
);

export default ModalLogin;
