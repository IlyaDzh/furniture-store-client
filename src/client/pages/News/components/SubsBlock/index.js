import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

import "./SubsBlock.scss";

const SubsBlock = ({
    formik: { handleSubmit, touched, values, errors, handleChange, handleBlur },
    ready
}) => (
    <div className="news-subs">
        <h5>Узнайте первыми о наших новостях и акциях!</h5>
        {!ready ? (
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        name="email"
                        placeholder="Введите ваш E-mail"
                        isInvalid={touched.email && errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="orange" type="button" onClick={handleSubmit}>
                    Подписаться
                </Button>
            </Form>
        ) : (
            <div className="news-subs--result">
                Вы успешно подписались на рассылку!
            </div>
        )}
    </div>
);

SubsBlock.propTypes = {
    formik: PropTypes.object,
    ready: PropTypes.bool
};

export default SubsBlock;
