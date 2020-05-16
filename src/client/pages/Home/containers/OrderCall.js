import React, { useState } from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { OrderCall as BaseOrderCall } from "../components";
import { phoneRegExp } from "utils/constants";
import { ordersApi } from "utils/api";

const OrderCall = () => {
    const [callReady, setCallReady] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone: ""
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Укажите своё Имя и Фамилию"),
            phone: Yup.string()
                .matches(phoneRegExp, "Не правильно набран номер")
                .required("Укажите свой Номер телефона")
        }),
        onSubmit: values => {
            values.type = "Заказ звонка";
            ordersApi
                .create(values)
                .then(() => {
                    setCallReady(true);
                })
                .catch(() => {
                    toast.error(
                        <>
                            <BsExclamationCircleFill />
                            <span>Упс. Произошла ошибка!</span>
                        </>
                    );
                });
        }
    });

    return <BaseOrderCall formik={formik} ready={callReady} />;
};

export default OrderCall;
