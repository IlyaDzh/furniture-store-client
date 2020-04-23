import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { SubsBlock } from "../../components";

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
            console.log(values);
            setSubsReady(true);
        }
    });

    return <SubsBlock formik={formik} ready={subsReady} />;
};

export default NewsSubs;
