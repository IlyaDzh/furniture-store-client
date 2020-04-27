import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ModalOneClick as BaseModalOneClick } from "components";
import { phoneRegExp } from "utils/constants";

const ModalOneClick = ({ show, onHide }) => {
    const [ready, setReady] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullname: "",
            number: "",
            comment: "" // сюда с стора внести `Хочу приобрести товар "${product_name}" `
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Укажите своё Имя и Фамилию"),
            number: Yup.string()
                .matches(phoneRegExp, "Не правильно набран номер")
                .required("Укажите свой Номер телефона"),
            comment: Yup.string().max(250, "Слишком много символов")
        }),
        onSubmit: values => {
            console.log(values);
            setReady(true);
        }
    });

    return (
        <BaseModalOneClick
            show={show}
            onHide={onHide}
            formik={formik}
            ready={ready}
        />
    );
};

export default ModalOneClick;
