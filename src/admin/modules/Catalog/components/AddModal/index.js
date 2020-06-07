import React from "react";
import { Modal as BaseModal, Form, Button, Col } from "react-bootstrap";

const AddModal = ({
    handleSubmit,
    touched,
    values,
    errors,
    handleChange,
    handleBlur,
    setValues,
    show,
    setShow
}) => (
    <BaseModal
        className="my-modal"
        show={show}
        onHide={() => setShow(false)}
        centered
    >
        <BaseModal.Header closeButton>
            <BaseModal.Title>Добавление продукта</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        name="name"
                        placeholder="Название"
                        isInvalid={touched.name && errors.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="images"
                        type="file"
                        isInvalid={touched.images && errors.images}
                        onBlur={handleBlur}
                        onChange={event =>
                            setValues({
                                ...values,
                                [event.currentTarget.name]: event.currentTarget.files
                            })
                        }
                        multiple
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.images}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Новое"
                        id="new"
                        checked={values.new}
                        onChange={event =>
                            setValues({
                                ...values,
                                [event.currentTarget.id]: event.currentTarget.checked
                            })
                        }
                        inline
                        custom
                    />
                    <Form.Check
                        type="checkbox"
                        label="Популярное"
                        id="hit"
                        checked={values.hit}
                        onChange={event =>
                            setValues({
                                ...values,
                                [event.currentTarget.id]: event.currentTarget.checked
                            })
                        }
                        inline
                        custom
                    />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control
                            name="price_current"
                            type="number"
                            placeholder="Текущая цена"
                            isInvalid={touched.price_current && errors.price_current}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price_current}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.price_current}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control
                            name="price_old"
                            type="number"
                            placeholder="Старая цена"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price_old}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Control
                        name="shape"
                        placeholder="Форма"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.shape}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="material"
                        placeholder="Материалы"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.material}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="style"
                        placeholder="Стиль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.style}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="color"
                        placeholder="Цвет"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.color}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="collection"
                        placeholder="Коллекция"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.collection}
                    />
                </Form.Group>
                <Button variant="orange" type="button" onClick={handleSubmit}>
                    Добавить
                </Button>
            </Form>
        </BaseModal.Body>
        <BaseModal.Footer></BaseModal.Footer>
    </BaseModal>
);

export default AddModal;
