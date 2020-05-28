import React from "react";
import { Form, Button } from "react-bootstrap";

import "./About.scss";

const About = ({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
}) => (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control
                as="textarea"
                rows="4"
                name="text"
                placeholder="О нас"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                name="number"
                placeholder="Номер телефона"
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
                name="time"
                placeholder="Время работы"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.time}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                name="address_office"
                placeholder="Адрес офиса"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address_office}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                name="address_prod"
                placeholder="Адрес производства"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address_prod}
            />
        </Form.Group>
        <Button
            variant="success"
            type="button"
            onClick={handleSubmit}
            disabled={Object.keys(touched).length ? false : true}
        >
            Редактировать
        </Button>
    </Form>
);

export default About;
