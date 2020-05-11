import React from "react";
import { BsFillInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { withFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Comments as BaseComments } from "../components";
import { commentsApi } from "utils/api";

const Comments = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        fullname: "",
        email: "",
        comment: ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Укажите свое имя и фамилию"),
        email: Yup.string().email("Неверный E-mail").required("Укажите свой E-mail"),
        comment: Yup.string().required("Напишите ваш отзыв")
    }),
    handleSubmit: (values, { resetForm }) => {
        commentsApi
            .addComment(values)
            .then(() => {
                resetForm();
                toast.success(
                    <>
                        <BsFillInfoCircleFill />
                        <span>Ваш комментарий был отправлен!</span>
                    </>
                );
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
})(BaseComments);

export default Comments;
