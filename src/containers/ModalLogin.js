import React from "react";
import { BsFillInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { ModalLogin as BaseModalLogin } from "components";
import { userActions } from "actions";
import store from "store";

const ModalLogin = ({ show, setShowLogin, onHide, onToggle }) => {
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
                .then(({ status }) => {
                    if (status === "Success") {
                        toast.success(
                            <>
                                <BsFillInfoCircleFill />
                                <span>Вы вошли в свой аккаунт</span>
                            </>
                        );
                        resetForm();
                        setShowLogin(false);
                    }
                })
                .catch(() => {
                    toast.error(
                        <>
                            <BsExclamationCircleFill />
                            <span>Неверный логин или пароль!</span>
                        </>
                    );
                });
        }
    });

    return (
        <BaseModalLogin
            show={show}
            onHide={onHide}
            onToggle={onToggle}
            formik={formik}
        />
    );
};

export default ModalLogin;
