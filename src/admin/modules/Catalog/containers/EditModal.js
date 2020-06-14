import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

import { Modal as BaseModal } from "../components";
import { catalogActions } from "admin/actions";
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
                title="Редактирование продукта"
                textButton="Редактировать"
            />
        )
    );
};

const EditModalEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data }) => ({
        name: data.name || "",
        new: data.new || false,
        hit: data.hit || false,
        price_current: (data.price && data.price.current) || "",
        price_old: (data.price && data.price.old) || "",
        shape: (data.chars && data.chars.shape) || "",
        material: (data.chars && data.chars.material.join(",")) || "",
        style: (data.chars && data.chars.style) || "",
        color: (data.chars && data.chars.color.join(",")) || "",
        collection: (data.chars && data.chars.collection) || ""
    }),
    validationSchema: Yup.object({
        name: Yup.string().required("Заполните поле"),
        price_current: Yup.number()
            .positive("Цена должна быть положительной")
            .required("Заполните текущую цену"),
        price_old: Yup.number().positive("Цена должна быть положительной")
    }),
    handleSubmit: (values, { resetForm, props: { data, type, setShow } }) => {
        const price = {
            current: values.price_current,
            old: values.price_old
        };
        const chars = {
            shape: values.shape,
            material: values.material.split(","),
            style: values.style,
            color: values.color.split(","),
            collection: values.collection
        };

        const formData = new FormData();
        formData.append("type", type);
        if (values.images) {
            for (let i = 0; i < values.images.length; i++) {
                formData.append("files", values.images[i]);
            }
        }
        formData.append("name", values.name);
        formData.append("new", values.new);
        formData.append("hit", values.hit);
        formData.append("price", JSON.stringify(price));
        formData.append("chars", JSON.stringify(chars));
        const postData = {
            id: data._id,
            formData
        };

        store.dispatch(catalogActions.editProduct(postData)).then(() => {
            setShow(false);
            resetForm();
        });
    }
})(BaseModal);

export default EditModal;
