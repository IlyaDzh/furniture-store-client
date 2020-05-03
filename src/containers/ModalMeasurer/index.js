import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";

import { ModalMeasurer as BaseModalMeasurer } from "components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "actions";

const ModalMeasurer = ({ fetchUserData, data, show, onHide }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ModalMeasurerEnhancer
            data={data}
            show={show}
            onHide={onHide}
            setReady={setReady}
            ready={ready}
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
    handleSubmit: (values, { props: { setReady } }) => {
        console.log(values);
        setReady(true);
    }
})(BaseModalMeasurer);

export default connect(
    ({ user }) => ({
        data: user.data
    }),
    userActions
)(ModalMeasurer);
