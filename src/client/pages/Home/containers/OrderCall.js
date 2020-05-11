import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { OrderCall as BaseOrderCall } from "../components";

const OrderCall = () => {
    const [callReady, setCallReady] = useState(false);
    const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

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
            setCallReady(true);
        }
    });

    return <BaseOrderCall formik={formik} ready={callReady} />;
};

export default OrderCall;
