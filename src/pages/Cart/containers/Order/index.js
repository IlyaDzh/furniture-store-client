import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";

import { Order as BaseOrder } from "../../components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "actions";

const Order = ({ fetchUserData, data, cart }) => {
    useEffect(() => {
        if (!data) {
            fetchUserData();
        }
    }, [data]);

    return <OrderEnhancer data={data} cart={cart} />;
};

const OrderEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data }) => ({
        fullname: data ? data.fullname : "",
        phone: data ? data.phone : "",
        email: data ? data.email : "",
        address: data ? data.address : "",
        payment: "Оплата наличными",
        delivery: "Самовывоз",
        comment: ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Заполните своё ФИО"),
        phone: Yup.string()
            .matches(phoneRegExp, "Не правильно набран номер")
            .required("Введите номер телефона"),
        email: Yup.string()
            .email("Неверный E-mail!")
            .required("Заполните поле E-mail"),
        address: Yup.string().required("Заполните адрес доставки")
    }),
    handleSubmit: (values, { props: { cart } }) => {
        values.cart = cart;
        console.log(values);
    }
})(BaseOrder);

export default connect(
    ({ user }) => ({
        data: user.data,
        cart: user.cart
    }),
    userActions
)(Order);
