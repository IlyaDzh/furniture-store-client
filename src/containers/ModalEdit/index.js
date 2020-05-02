import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { BsExclamationCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";

import { ModalEdit as BaseModalEdit } from "components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "actions";

const ModalEdit = ({ fetchUserData, data, show, onHide }) => {
    useEffect(() => {
        if (!data) {
            fetchUserData();
        }
    }, [data]);

    return data && <ModalEditEnhancer data={data} show={show} onHide={onHide} />;
};

const ModalEditEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data: { fullname, phone, email, address } }) => ({
        fullname: fullname,
        phone: phone,
        email: email,
        address: address,
        password: ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Заполните своё ФИО"),
        phone: Yup.string()
            .matches(phoneRegExp, "Не правильно набран номер")
            .required("Заполните свой номер телефона"),
        email: Yup.string()
            .email("Неверный E-mail!")
            .required("Заполните поле E-mail"),
        password: Yup.string()
            .min(8, "Пароль слишком маленький")
            .max(15, "Пароль слишком большой")
    }),
    handleSubmit: values => {
        console.log(values);
        // store
        //     .dispatch(userActions.fetchEditData(values))
        //     .then(() => {})
        //     .catch(() => {
        //         toast.error(
        //             <>
        //                 <BsExclamationCircleFill />
        //                 <span>
        //                     Возникла серверная ошибка при редактировании!
        //                 </span>
        //             </>
        //         );
        //     });
    }
})(BaseModalEdit);

export default connect(
    ({ user }) => ({
        data: user.data
    }),
    userActions
)(ModalEdit);
