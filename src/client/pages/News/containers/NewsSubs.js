import React, { useState } from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { SubsBlock } from "../components";
import { ordersApi } from "utils/api";

const NewsSubs = () => {
    const [subsReady, setSubsReady] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Неверный E-mail")
                .required("Укажите свой E-mail")
        }),
        onSubmit: values => {
            values.type = "Подписка на рассылку";
            ordersApi
                .create(values)
                .then(() => setSubsReady(true))
                .catch(() => {
                    toast.error(
                        <>
                            <BsExclamationCircleFill />
                            <span>Упс. Произошла ошибка!</span>
                        </>
                    );
                });
        }
    });

    return <SubsBlock formik={formik} ready={subsReady} />;
};

export default NewsSubs;
