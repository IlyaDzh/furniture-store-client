import React from "react";
import { BsFillInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import get from "lodash/get";
import { toast } from "react-toastify";

import { ModalRegister as BaseModalRegister } from "components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "actions";
import store from "store";

const ModalRegister = ({ show, successReg, onHide }) => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            email: "",
            password: "",
            password_2: ""
        },
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
                .required("Обязательное поле"),
            password_2: Yup.string()
                .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
                .required("Обязательное поле")
        }),
        onSubmit: values => {
            store
                .dispatch(userActions.fetchUserSignUp(values))
                .then(() => {
                    toast.success(
                        <>
                            <BsFillInfoCircleFill />
                            <span>Вы успешно зарегистрированы!</span>
                        </>
                    );
                    successReg();
                })
                .catch(err => {
                    if (
                        get(err, "response.data.message", "").indexOf("duplicate") >=
                        0
                    ) {
                        toast.error(
                            <>
                                <BsExclamationCircleFill />
                                <span>Аккаунт с такой почтой уже существует!</span>
                            </>
                        );
                    } else {
                        toast.error(
                            <>
                                <BsExclamationCircleFill />
                                <span>
                                    Возникла серверная ошибка при регистрации!
                                </span>
                            </>
                        );
                    }
                });
        }
    });

    return <BaseModalRegister show={show} onHide={onHide} formik={formik} />;
};

export default ModalRegister;
