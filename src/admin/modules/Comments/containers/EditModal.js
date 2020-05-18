import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { EditModal as BaseEditModal } from "admin/components";
import { commentsActions } from "admin/actions";
import store from "admin/store";

const EditModal = ({ show, setShow, onHide, onToggle }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Заполните поле E-mail"),
            password: Yup.string().required("Заполните поле Пароль")
        }),
        onSubmit: (values, { resetForm }) => {
            store
                .dispatch(userActions.fetchUserSignIn(values))
                .then(() => {
                    resetForm();
                })
                .catch(() => {});
        }
    });

    return (
        <BaseEditModal
            show={show}
            onHide={onHide}
            onToggle={onToggle}
            formik={formik}
        />
    );
};

export default EditModal;
