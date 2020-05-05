import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsFillInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { withFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { ModalOneClick as BaseModalOneClick } from "components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "actions";
import { ordersApi } from "utils/api";

const ModalOneClick = ({ fetchUserData, isAuth, data, show, setShowFastBuy }) => {
    useEffect(() => {
        if (isAuth && !data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ModalOneClickEnhancer
            data={data}
            show={show}
            setShowFastBuy={setShowFastBuy}
        />
    );
};

const ModalOneClickEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data }) => ({
        fullname: data ? data.fullname : "",
        phone: data ? data.phone : "",
        comment: ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Укажите своё Имя и Фамилию"),
        phone: Yup.string()
            .matches(phoneRegExp, "Не правильно набран номер")
            .required("Укажите свой Номер телефона"),
        comment: Yup.string().max(250, "Слишком много символов")
    }),
    handleSubmit: (values, { resetForm, props: { setShowFastBuy } }) => {
        values.type = "Заказ звонка";
        ordersApi
            .createOrder(values)
            .then(() => {
                toast.success(
                    <>
                        <BsFillInfoCircleFill />
                        <span>Ваша заявка отправлена!</span>
                    </>
                );
                resetForm();
                setShowFastBuy(false);
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
})(BaseModalOneClick);

export default connect(
    ({ user }) => ({
        isAuth: user.isAuth,
        data: user.data
    }),
    userActions
)(ModalOneClick);
