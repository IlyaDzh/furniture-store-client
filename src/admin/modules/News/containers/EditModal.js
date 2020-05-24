import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

import { Modal as BaseModal } from "../components";
import { newsActions } from "admin/actions";
import store from "admin/store";

const EditModal = ({ itemData, show, setShow }) => {
    const [data, setData] = useState(itemData);

    useEffect(() => {
        setData(itemData);
    }, [itemData]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        data && (
            <EditModalEnhancer
                data={data}
                show={show}
                setShow={setShow}
                title="Редактирование новости"
                textButton="Редактировать"
            />
        )
    );
};

const EditModalEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data }) => ({
        date: data.date || "",
        title: data.title || "",
        short_description: data.short_description || "",
        description: data.description || ""
    }),
    validationSchema: Yup.object({
        date: Yup.string().required("Заполните поле Дата"),
        title: Yup.string().required("Заполните поле Название"),
        short_description: Yup.string().required("Заполните поле Краткое описание"),
        description: Yup.string().required("Заполните поле Описание")
    }),
    handleSubmit: (values, { resetForm, props: { data, setShow } }) => {
        const formData = new FormData();
        formData.append("file", values.image);
        formData.append("date", values.date);
        formData.append("title", values.title);
        formData.append("short_description", values.short_description);
        formData.append("description", values.description);
        const postData = {
            id: data._id,
            formData
        };
        store.dispatch(newsActions.editNews(postData)).then(() => {
            setShow(false);
            resetForm();
        });
    }
})(BaseModal);

export default EditModal;
