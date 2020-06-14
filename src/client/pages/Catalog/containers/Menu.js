import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withFormik } from "formik";

import { Menu as BaseMenu } from "../components";
import { catalogActions } from "client/actions";

const Menu = ({ currentItem, setFilterItems }) => {
    const { path } = useParams();
    const [resetMenu, setResetMenu] = useState(false);

    useEffect(() => {
        setResetMenu(!resetMenu);
    }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        currentItem && (
            <MenuEnhancer
                resetMenu={resetMenu}
                categories={currentItem.categories}
                setFilterItems={setFilterItems}
            />
        )
    );
};

const MenuEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ resetMenu }) => ({
        lowerBound: 0,
        upperBound: 300000,
        new: false,
        hit: false,
        material: [],
        color: [],
        style: [],
        shape: [],
        reseted: resetMenu
    }),
    handleSubmit: (values, { props: { setFilterItems } }) => {
        setFilterItems(values);
    }
})(BaseMenu);

export default connect(
    ({ catalog }) => ({
        currentItem: catalog.currentItem,
        setFilterItems: catalog.setFilterItems,
        isLoading: catalog.isLoading,
        error: catalog.error
    }),
    catalogActions
)(Menu);
