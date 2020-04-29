import React from "react";
import { Link } from "react-router-dom";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

import { ReadyInModal } from "components";

const ModalMeasurer = ({
    formik: { handleSubmit, touched, values, errors, handleChange, handleBlur },
    ready,
    show,
    onHide
}) => (
    <BaseModal className="my-modal" show={show} onHide={onHide} centered>
        <BaseModal.Header closeButton>
            <BaseModal.Title>Вызвать замерщика</BaseModal.Title>
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
                    <Form.Group>
                        <Form.Control
                            name="address"
                            placeholder="Адрес"
                            isInvalid={touched.address && errors.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.address}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name="time"
                            placeholder="Желательное время приезда"
                            isInvalid={touched.time && errors.time}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.time}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.time}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name="date"
                            type="date"
                            placeholder="Дата"
                            isInvalid={touched.date && errors.date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.date}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.date}
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

export default ModalMeasurer;
