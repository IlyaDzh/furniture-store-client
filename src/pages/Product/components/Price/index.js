import React from "react";

import "./Price.scss";

const Price = ({ price: { current, old, discount, percent } }) => (
    <div className="product-price">
        <div className="product-price__item">
            <div className="price__old">{old} руб.</div>
            <div className="price__current">
                {current} <span className="price__measure">руб / шт</span>
            </div>
        </div>
        <div className="product-price__item">
            <div className="discount__percent">-{percent}%</div>
            <div className="discount__value">
                Вы экономите: <span>{discount}</span> руб.
            </div>
        </div>
    </div>
);

export default Price;
