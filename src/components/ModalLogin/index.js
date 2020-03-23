import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const ModalLogin = props => {
    return (
        <BaseModal
            className="my-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            {...props}
        >
            <BaseModal.Header closeButton>
                <BaseModal.Title id="contained-modal-title-vcenter">Вход</BaseModal.Title>
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
};

export default ModalLogin;
