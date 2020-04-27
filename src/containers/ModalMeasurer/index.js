import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ModalMeasurer as BaseModalMeasurer } from "components";
import { phoneRegExp } from "utils/constants";

const ModalMeasurer = ({ show, onHide }) => {
    const [ready, setReady] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullname: "",
            number: "",
            address: "",
            time: "",
            date: ""
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Укажите своё Имя и Фамилию"),
            number: Yup.string()
                .matches(phoneRegExp, "Не правильно набран номер")
                .required("Укажите свой Номер телефона"),
            address: Yup.string().required("Укажите свой Адрес"),
            time: Yup.string().required("Укажите желательное время приезда"),
            date: Yup.string().required("Укажите дату приезда")
        }),
        onSubmit: values => {
            console.log(values);
            setReady(true);
        }
    });

    return (
        <BaseModalMeasurer
            show={show}
            onHide={onHide}
            formik={formik}
            ready={ready}
        />
    );
};

export default ModalMeasurer;
