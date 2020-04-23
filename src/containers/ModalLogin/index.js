import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ModalLogin as BaseModalLogin } from "components";

const ModalLogin = ({ show, setShowLogin, onHide, onToggle }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Заполните поле E-mail"),
            password: Yup.string().required("Заполните поле Пароль")
        }),
        onSubmit: values => {
            console.log(values);
            setShowLogin(false);
        }
    });

    return (
        <BaseModalLogin
            show={show}
            onHide={onHide}
            onToggle={onToggle}
            formik={formik}
        />
    );
};

export default ModalLogin;
