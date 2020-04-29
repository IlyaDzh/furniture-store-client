import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Order as BaseOrder } from "../../components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "actions";

const Order = ({ cart }) => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            number: "",
            email: "",
            address: "",
            payment: "Оплата наличными",
            delivery: "Самовывоз",
            comment: ""
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Заполните своё ФИО"),
            number: Yup.string()
                .matches(phoneRegExp, "Не правильно набран номер")
                .required("Введите номер телефона"),
            email: Yup.string()
                .email("Неверный E-mail!")
                .required("Заполните поле E-mail"),
            address: Yup.string().required("Заполните адрес доставки")
        }),
        onSubmit: values => {
            values.cart = cart;
            console.log(values);
        }
    });

    return <BaseOrder formik={formik} cart={cart} />;
};

export default connect(
    ({ user }) => ({
        cart: user.cart
    }),
    userActions
)(Order);
