import React from "react";
import { Modal as BaseModal, Form, Button } from "react-bootstrap";

const Modal = ({
    handleSubmit,
    touched,
    values,
    errors,
    handleChange,
    handleBlur,
    setValues,
    show,
    setShow,
    title = "Добавление новости",
    textButton = "Добавить"
}) => (
    <BaseModal
        className="my-modal"
        show={show}
        onHide={() => setShow(false)}
        centered
    >
        <BaseModal.Header closeButton>
            <BaseModal.Title>{title}</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        name="date"
                        type="date"
                        placeholder="Дата"
                        isInvalid={touched.date && errors.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={
                            values.date &&
                            new Date(values.date).toISOString().slice(0, 10)
                        }
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.date}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="title"
                        placeholder="Название"
                        isInvalid={touched.title && errors.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.title}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="image"
                        type="file"
                        isInvalid={touched.image && errors.image}
                        onBlur={handleBlur}
                        onChange={event =>
                            setValues({
                                ...values,
                                [event.currentTarget.name]:
                                    event.currentTarget.files[0]
                            })
                        }
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.image}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="2"
                        name="short_description"
                        placeholder="Краткое описание"
                        isInvalid={
                            touched.short_description && errors.short_description
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.short_description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.short_description}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="5"
                        name="description"
                        placeholder="Полное писание"
                        isInvalid={touched.description && errors.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.description}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="orange" type="button" onClick={handleSubmit}>
                    {textButton}
                </Button>
            </Form>
        </BaseModal.Body>
        <BaseModal.Footer></BaseModal.Footer>
    </BaseModal>
);

export default Modal;
