import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ModalRegister as BaseModalRegister } from "components";
import { phoneRegExp } from "utils/constants";

const ModalRegister = ({ show, onHide }) => {
    const [ready, setReady] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullname: "",
            number: "",
            email: "",
            password: "",
            password_2: ""
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Заполните своё ФИО"),
            number: Yup.string().matches(phoneRegExp, "Не правильно набран номер"),
            email: Yup.string()
                .email("Неверный E-mail!")
                .required("Заполните поле E-mail"),
            password: Yup.string()
                .min(8, "Пароль слишком маленький")
                .max(15, "Пароль слишком большой")
                .required("Обязательное поле"),
            password_2: Yup.string()
                .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
                .required("Обязательное поле")
        }),
        onSubmit: values => {
            console.log(values);
            setReady(true);
        }
    });

    return (
        <BaseModalRegister
            show={show}
            onHide={onHide}
            formik={formik}
            ready={ready}
        />
    );
};

export default ModalRegister;
