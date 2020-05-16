import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsFillInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { withFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { ModalMeasurer as BaseModalMeasurer } from "client/components";
import { phoneRegExp } from "utils/constants";
import { ordersApi } from "utils/api";
import { userActions } from "client/actions";

const ModalMeasurer = ({ fetchUserData, isAuth, data, show, setShowMeasurer }) => {
    useEffect(() => {
        if (isAuth && !data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ModalMeasurerEnhancer
            data={data}
            show={show}
            setShowMeasurer={setShowMeasurer}
        />
    );
};

const ModalMeasurerEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data }) => ({
        fullname: data ? data.fullname : "",
        phone: data ? data.phone : "",
        address: data ? data.address : "",
        time: "",
        date: ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Укажите своё Имя и Фамилию"),
        phone: Yup.string()
            .matches(phoneRegExp, "Не правильно набран номер")
            .required("Укажите свой Номер телефона"),
        address: Yup.string().required("Укажите свой адрес"),
        time: Yup.string().required("Укажите желательное время приезда"),
        date: Yup.string().required("Укажите дату приезда")
    }),
    handleSubmit: (values, { resetForm, props: { setShowMeasurer } }) => {
        values.type = "Вызов замерщика";
        ordersApi
            .create(values)
            .then(() => {
                toast.success(
                    <>
                        <BsFillInfoCircleFill />
                        <span>Ваша заявка отправлена!</span>
                    </>
                );
                resetForm();
                setShowMeasurer(false);
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
})(BaseModalMeasurer);

export default connect(
    ({ user }) => ({
        isAuth: user.isAuth,
        data: user.data
    }),
    userActions
)(ModalMeasurer);
