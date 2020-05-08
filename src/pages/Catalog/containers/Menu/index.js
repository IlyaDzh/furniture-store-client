import React, { useState } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import { Menu as BaseMenu } from "../../components";
import { catalogActions } from "actions";

const Menu = ({ currentItem }) => {
    const formik = useFormik({
        initialValues: {
            lowerBound: 0,
            upperBound: 400000,
            new: false,
            hit: false,
            search: {}
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        currentItem && (
            <BaseMenu formik={formik} categories={currentItem.categories} />
        )
    );
};

export default connect(
    ({ catalog }) => ({
        currentItem: catalog.currentItem,
        isLoading: catalog.isLoading,
        error: catalog.error
    }),
    catalogActions
)(Menu);
