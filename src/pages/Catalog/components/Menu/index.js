import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import BaseCollapse from "rc-collapse";
import Slider from "rc-slider";

import "./Menu.scss";

const Menu = ({
    formik: { values, handleSubmit, setFieldValue, resetForm },
    minValue,
    maxValue,
    checkboxesView
}) => {
    const [rangeValue, setRangeValue] = useState([minValue, maxValue]);

    const onLowerBoundChange = ({ target: { value } }) => {
        setFieldValue("lowerBound", value);
        setRangeValue([value, values.upperBound]);
    };

    const onUpperBoundChange = ({ target: { value } }) => {
        setFieldValue("upperBound", value);
        setRangeValue([values.lowerBound, value]);
    };

    const onSliderChange = value => {
        setFieldValue("lowerBound", value[0]);
        setFieldValue("upperBound", value[1]);
        setRangeValue(value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <BaseCollapse defaultActiveKey="0">
                <BaseCollapse.Panel header="Цена">
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>От</Form.Label>
                            <Form.Control
                                size="sm"
                                type="number"
                                name="lowerBound"
                                value={values.lowerBound}
                                onChange={onLowerBoundChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>До</Form.Label>
                            <Form.Control
                                size="sm"
                                type="number"
                                name="upperBound"
                                value={values.upperBound}
                                onChange={onUpperBoundChange}
                            />
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
                    <Form.Check
                        id="isNew"
                        label="Новинки"
                        checked={values.isNew || false}
                        onChange={() => setFieldValue("isNew", !values.isNew)}
                        custom
                    />
                    <Form.Check
                        id="isHit"
                        label="Хит продаж"
                        checked={values.isHit || false}
                        onChange={() => setFieldValue("isHit", !values.isHit)}
                        custom
                    />
                </BaseCollapse.Panel>
                <BaseCollapse.Panel header="Вид">
                    {checkboxesView.map(item => (
                        <Form.Check
                            key={item.id}
                            id={item.name}
                            label={item.label}
                            checked={values.view[item.name] || false}
                            onChange={() =>
                                setFieldValue(
                                    `view[${item.name}]`,
                                    !values.view[item.name]
                                )
                            }
                            custom
                        />
                    ))}
                </BaseCollapse.Panel>
                <BaseCollapse.Panel header="Цвет">
                    this is panel content
                </BaseCollapse.Panel>
                <BaseCollapse.Panel header="Стиль">
                    this is panel content
                </BaseCollapse.Panel>
                <BaseCollapse.Panel header="Форма">
                    this is panel content
                </BaseCollapse.Panel>
                <BaseCollapse.Panel header="Материал">
                    this is panel content
                </BaseCollapse.Panel>
                <div className="rc-collapse-footer">
                    <Button
                        variant="link"
                        type="button"
                        onClick={() => {
                            resetForm();
                            setRangeValue([minValue, maxValue]);
                        }}
                    >
                        Сбросить
                    </Button>
                    <Button
                        className="btn-orange"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Найти
                    </Button>
                </div>
            </BaseCollapse>
        </Form>
    );
};

export default Menu;
