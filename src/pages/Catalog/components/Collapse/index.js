import React from "react";
import BaseCollapse from "rc-collapse/lib";

import "./Collapse.scss";

const Collapse = () => {
    return (
        <BaseCollapse>
            <div>Цена Хит продаж Новинка</div>
            <BaseCollapse.Panel header="Вид">this is panel content</BaseCollapse.Panel>
            <BaseCollapse.Panel header="Цвет">this is panel content</BaseCollapse.Panel>
            <BaseCollapse.Panel header="Стиль">this is panel content</BaseCollapse.Panel>
            <BaseCollapse.Panel header="Форма">this is panel content</BaseCollapse.Panel>
            <BaseCollapse.Panel header="Материал">this is panel content</BaseCollapse.Panel>
        </BaseCollapse>
    );
};

export default Collapse;
