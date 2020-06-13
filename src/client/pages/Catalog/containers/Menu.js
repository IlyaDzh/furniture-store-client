import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import { Menu as BaseMenu } from "../components";
import { catalogActions } from "client/actions";

const Menu = ({ currentItem, setFilterItems }) => {
    const formik = useFormik({
        initialValues: {
            lowerBound: 0,
            upperBound: 400000,
            new: false,
            hit: false,
            material: [],
            color: [],
            style: [],
            shape: []
        },
        onSubmit: values => {
            setFilterItems(values);
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
        setFilterItems: catalog.setFilterItems,
        isLoading: catalog.isLoading,
        error: catalog.error
    }),
    catalogActions
)(Menu);
