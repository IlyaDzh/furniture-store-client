import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";

import { ModalCall as BaseModalCall } from "components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "actions";

const ModalCall = ({ fetchUserData, data, show, onHide }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ModalCallEnhancer
            data={data}
            show={show}
            onHide={onHide}
            setReady={setReady}
            ready={ready}
        />
    );
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
    handleSubmit: (values, { props: { setReady } }) => {
        console.log(values);
        setReady(true);
    }
})(BaseModalCall);

export default connect(
    ({ user }) => ({
        data: user.data
    }),
    userActions
)(ModalCall);
