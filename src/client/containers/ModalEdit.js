import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { BsFillInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";

import { ModalEdit as BaseModalEdit } from "client/components";
import { phoneRegExp } from "utils/constants";
import { userActions } from "client/actions";

const ModalEdit = ({
    fetchUserData,
    updateUserData,
    data,
    show,
    setShowEdit,
    onHide
}) => {
    useEffect(() => {
        if (!data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        data && (
            <ModalEditEnhancer
                updateUserData={updateUserData}
                data={data}
                show={show}
                setShowEdit={setShowEdit}
                onHide={onHide}
            />
        )
    );
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
        phone: Yup.string().matches(phoneRegExp, "Не правильно набран номер"),
        password: Yup.string()
            .min(8, "Пароль слишком маленький")
            .max(15, "Пароль слишком большой")
    }),
    handleSubmit: (
        values,
        { resetForm, props: { updateUserData, setShowEdit } }
    ) => {
        updateUserData(values)
            .then(() => {
                setShowEdit(false);
                resetForm();
                toast.success(
                    <>
                        <BsFillInfoCircleFill />
                        <span>Ваши данные были обновлены!</span>
                    </>
                );
            })
            .catch(() => {
                toast.error(
                    <>
                        <BsExclamationCircleFill />
                        <span>Возникла серверная ошибка при редактировании!</span>
                    </>
                );
            });
    }
})(BaseModalEdit);

export default connect(
    ({ user }) => ({
        data: user.data
    }),
    userActions
)(ModalEdit);
