import React, { useState } from "react";
import BaseCollapse from "rc-collapse";
import Slider from "rc-slider";
import { Form, Col } from "react-bootstrap";

import "./Collapse.scss";

const Collapse = () => {
    const [maxValue, setMaxValue] = useState(75000);
    const [minValue, setMinValue] = useState(0);
    const [rangeValue, setRangeValue] = useState([minValue, maxValue]);
    const [lowerBound, setLowerBound] = useState(minValue);
    const [upperBound, setUpperBound] = useState(maxValue);

    const onLowerBoundChange = e => {
        setLowerBound(e.target.value);
        setRangeValue([e.target.value, upperBound]);
    };

    const onUpperBoundChange = e => {
        setUpperBound(e.target.value);
        setRangeValue([lowerBound, e.target.value]);
    };

    const onSliderChange = value => {
        setLowerBound(value[0]);
        setUpperBound(value[1]);
        setRangeValue(value);
    };

    return (
        <BaseCollapse defaultActiveKey="0">
            <BaseCollapse.Panel header="Цена">
                <Form.Row>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>От</Form.Label>
                        <Form.Control value={lowerBound} onChange={onLowerBoundChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>До</Form.Label>
                        <Form.Control value={upperBound} onChange={onUpperBoundChange} />
                    </Form.Group>
                </Form.Row>
                <Slider.Range
                    allowCross={false}
                    step={10}
                    min={minValue}
                    max={maxValue}
                    value={rangeValue}
                    onChange={onSliderChange}
                />
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header="Вид">this is panel content</BaseCollapse.Panel>
            <BaseCollapse.Panel header="Цвет">this is panel content</BaseCollapse.Panel>
            <BaseCollapse.Panel header="Стиль">this is panel content</BaseCollapse.Panel>
            <BaseCollapse.Panel header="Форма">this is panel content</BaseCollapse.Panel>
            <BaseCollapse.Panel header="Материал">this is panel content</BaseCollapse.Panel>
        </BaseCollapse>
    );
};

export default Collapse;
