import React, { useState } from "react";
import { useFormik } from "formik";

import { Menu as BaseMenu } from "../../components";

const checkboxesView = [
    {
        id: 1,
        name: "is1",
        label: "Банкетки"
    },
    {
        id: 2,
        name: "is2",
        label: "Диваны"
    },
    {
        id: 3,
        name: "is3",
        label: "Зеркала"
    },
    {
        id: 4,
        name: "is4",
        label: "Комоды"
    },
    {
        id: 5,
        name: "is5",
        label: "Кресла"
    },
    {
        id: 6,
        name: "is6",
        label: "Кровати"
    },
    {
        id: 7,
        name: "is7",
        label: "Полки"
    }
];

const Menu = () => {
    const [maxValue, setMaxValue] = useState(75000);
    const [minValue, setMinValue] = useState(0);

    const formik = useFormik({
        initialValues: {
            lowerBound: minValue,
            upperBound: maxValue,
            isNew: false,
            isHit: false,
            view: {},
            color: {},
            style: {},
            shape: {},
            material: {}
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <BaseMenu
            formik={formik}
            minValue={minValue}
            maxValue={maxValue}
            checkboxesView={checkboxesView}
        />
    );
};

export default Menu;
