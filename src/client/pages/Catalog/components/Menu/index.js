import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import BaseCollapse from "rc-collapse";
import Slider from "rc-slider";

import "./Menu.scss";

const Menu = ({
    formik: { values, handleSubmit, setFieldValue, resetForm },
    categories
}) => {
    const minValue = 0;
    const maxValue = 400000;
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
                        id="new"
                        label="Новинки"
                        checked={values.new || false}
                        onChange={() => setFieldValue("new", !values.isNew)}
                        custom
                    />
                    <Form.Check
                        id="hit"
                        label="Хит продаж"
                        checked={values.hit || false}
                        onChange={() => setFieldValue("hit", !values.isHit)}
                        custom
                    />
                </BaseCollapse.Panel>
                {categories.map(item => (
                    <BaseCollapse.Panel key={item._id} header={item.title}>
                        {item.content.map((checkbox, index) => (
                            <Form.Check
                                key={index}
                                id={checkbox}
                                label={checkbox}
                                checked={values.search[checkbox] || false}
                                onChange={() =>
                                    setFieldValue(
                                        `search[${checkbox}]`,
                                        !values.search[checkbox]
                                    )
                                }
                                custom
                            />
                        ))}
                    </BaseCollapse.Panel>
                ))}
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
