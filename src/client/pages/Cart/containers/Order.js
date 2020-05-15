import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsFillInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { withFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Order as BaseOrder } from "../components";
import { userActions, cartActions } from "client/actions";
import { phoneRegExp } from "utils/constants";
import { ordersApi } from "utils/api";

const Order = ({ fetchUserData, clearCart, addOrder, isAuth, data, cart }) => {
    useEffect(() => {
        if (isAuth && !data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <OrderEnhancer
            isAuth={isAuth}
            data={data}
            cart={cart}
            clearCart={clearCart}
            addOrder={addOrder}
        />
    );
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
    handleSubmit: (values, { props: { isAuth, cart, clearCart, addOrder } }) => {
        values.type = "Оформление заказа";
        values.cart = cart.map(({ product, count }) => ({
            product: product._id,
            count: Number(count)
        }));
        ordersApi
            .create(values)
            .then(({ data }) => {
                clearCart();
                if (isAuth) {
                    addOrder(data);
                }
                toast.success(
                    <>
                        <BsFillInfoCircleFill />
                        <span>Ваш заказ успешно оформлен!</span>
                    </>
                );
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
})(BaseOrder);

export default connect(
    ({ user, cart }) => ({
        isAuth: user.isAuth,
        data: user.data,
        cart: cart.items
    }),
    {
        fetchUserData: userActions.fetchUserData,
        addOrder: userActions.addOrder,
        clearCart: cartActions.clearCart
    }
)(Order);
