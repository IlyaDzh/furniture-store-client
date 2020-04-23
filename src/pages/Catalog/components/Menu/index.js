import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";
import BaseCollapse from "rc-collapse";
import Slider from "rc-slider";

import "./Menu.scss";

const checkboxesType = [
    {
        id: 1,
        name: "isNew",
        label: "Банкетки"
    },
    {
        id: 2,
        name: "isHit",
        label: "Диваны"
    },
    {
        id: 3,
        name: "is_new",
        label: "Зеркала"
    },
    {
        id: 4,
        name: "is_hit",
        label: "Комоды"
    },
    {
        id: 5,
        name: "is_hit",
        label: "Кресла"
    },
    {
        id: 6,
        name: "is_new",
        label: "Кровати"
    },
    {
        id: 7,
        name: "is_hit",
        label: "Полки"
    }
];

const Menu = () => {
    const [maxValue, setMaxValue] = useState(75000);
    const [minValue, setMinValue] = useState(0);
    const [rangeValue, setRangeValue] = useState([minValue, maxValue]);
    const [lowerBound, setLowerBound] = useState(minValue);
    const [upperBound, setUpperBound] = useState(maxValue);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    const onLowerBoundChange = ({ target: { value } }) => {
        setLowerBound(value);
        setRangeValue([value, upperBound]);
    };

    const onUpperBoundChange = ({ target: { value } }) => {
        setUpperBound(value);
        setRangeValue([lowerBound, value]);
    };

    const onSliderChange = value => {
        setLowerBound(value[0]);
        setUpperBound(value[1]);
        setRangeValue(value);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <BaseCollapse defaultActiveKey="0">
                <BaseCollapse.Panel header="Цена">
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>От</Form.Label>
                            <Form.Control
                                size="sm"
                                type="number"
                                name="lowerBound"
                                value={lowerBound}
                                onChange={onLowerBoundChange}
                                ref={register}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>До</Form.Label>
                            <Form.Control
                                size="sm"
                                type="number"
                                name="upperBound"
                                value={upperBound}
                                onChange={onUpperBoundChange}
                                ref={register}
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
                    <Form.Check name="isNew" label="Новинки" ref={register} />
                    <Form.Check name="isHit" label="Хит продаж" ref={register} />
                </BaseCollapse.Panel>
                <BaseCollapse.Panel header="Вид">
                    {checkboxesType.map(item => (
                        <Form.Check
                            key={item.id}
                            name={item.label}
                            label={item.label}
                            ref={register}
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
                    <Button variant="link" type="reset">
                        Сбросить
                    </Button>
                    <Button className="btn-orange" type="submit">
                        Найти
                    </Button>
                </div>
            </BaseCollapse>
        </Form>
    );
};

export default Menu;
