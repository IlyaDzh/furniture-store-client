import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";

import { ModalOneClick as BaseModalOneClick } from "components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "actions";

const ModalOneClick = ({ fetchUserData, data, show, onHide }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ModalOneClickEnhancer
            data={data}
            show={show}
            onHide={onHide}
            setReady={setReady}
            ready={ready}
        />
    );
};

const ModalOneClickEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data }) => ({
        fullname: data ? data.fullname : "",
        phone: data ? data.phone : "",
        comment: ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Укажите своё Имя и Фамилию"),
        phone: Yup.string()
            .matches(phoneRegExp, "Не правильно набран номер")
            .required("Укажите свой Номер телефона"),
        comment: Yup.string().max(250, "Слишком много символов")
    }),
    handleSubmit: (values, { props: { setReady } }) => {
        console.log(values);
        setReady(true);
    }
})(BaseModalOneClick);

export default connect(
    ({ user }) => ({
        data: user.data
    }),
    userActions
)(ModalOneClick);
