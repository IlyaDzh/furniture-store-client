import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ModalCall as BaseModalCall } from "components";
import { phoneRegExp } from "utils/constants";

const ModalCall = ({ show, onHide }) => {
    const [ready, setReady] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullname: "",
            number: ""
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Укажите своё Имя и Фамилию"),
            number: Yup.string()
                .matches(phoneRegExp, "Не правильно набран номер")
                .required("Укажите свой Номер телефона")
        }),
        onSubmit: values => {
            console.log(values);
            setReady(true);
        }
    });

    return (
        <BaseModalCall show={show} onHide={onHide} formik={formik} ready={ready} />
    );
};

export default ModalCall;
