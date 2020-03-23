import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const ModalMeasurer = props => {
    return (
        <BaseModal
            className="my-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            {...props}
        >
            <BaseModal.Header closeButton>
                <BaseModal.Title id="contained-modal-title-vcenter">
                    Вызвать замерщика
                </BaseModal.Title>
            </BaseModal.Header>
            <BaseModal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control placeholder="Ваше имя" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="Телефон" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="Адрес" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="Желательное время приезда" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="date" placeholder="Дата" />
                    </Form.Group>
                    <Button className="btn-orange">Отправить</Button>
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

export default ModalMeasurer;
