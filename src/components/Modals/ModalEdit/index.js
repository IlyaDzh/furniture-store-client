import React from "react";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const ModalEdit = ({
    handleSubmit,
    touched,
    values,
    errors,
    handleChange,
    handleBlur,
    show,
    onHide
}) => (
    <BaseModal className="my-modal" show={show} onHide={onHide} centered>
        <BaseModal.Header closeButton>
            <BaseModal.Title>Редактирование</BaseModal.Title>
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
                    <Form.Control value={values.email} disabled />
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
                        name="address"
                        placeholder="Адрес"
                        isInvalid={touched.phone && errors.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address || ""}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.address}
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
                    Применить
                </Button>
            </Form>
        </BaseModal.Body>
        <BaseModal.Footer></BaseModal.Footer>
    </BaseModal>
);

export default ModalEdit;
