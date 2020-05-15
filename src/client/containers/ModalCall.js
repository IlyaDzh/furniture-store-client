import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsFillInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { withFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { ModalCall as BaseModalCall } from "client/components";
import { phoneRegExp } from "utils/constants";
import { ordersApi } from "utils/api";
import { userActions } from "client/actions";

const ModalCall = ({ fetchUserData, isAuth, data, show, setShowCall }) => {
    useEffect(() => {
        if (isAuth && !data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return <ModalCallEnhancer data={data} show={show} setShowCall={setShowCall} />;
};

const ModalCallEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data }) => ({
        fullname: data ? data.fullname : "",
        phone: data ? data.phone : ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Укажите своё Имя и Фамилию"),
        phone: Yup.string()
            .matches(phoneRegExp, "Не правильно набран номер")
            .required("Укажите свой Номер телефона")
    }),
    handleSubmit: (values, { resetForm, props: { setShowCall } }) => {
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
                setShowCall(false);
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
})(BaseModalCall);

export default connect(
    ({ user }) => ({
        isAuth: user.isAuth,
        data: user.data
    }),
    userActions
)(ModalCall);
