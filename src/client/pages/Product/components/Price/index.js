import React from "react";

import getConvertPrice from "utils/helpers/getConvertPrice";
import "./Price.scss";

const Price = ({ price: { current, old } }) => (
    <div className="product-price">
        <div className="product-price__item">
            {old && <div className="price__old">{getConvertPrice(old)} руб.</div>}
            <div className="price__current">
                {getConvertPrice(current)}{" "}
                <span className="price__measure">руб / шт</span>
            </div>
        </div>
        {old && (
            <div className="product-price__item">
                <div className="discount__percent">
                    -{Math.round(((old - current) / old) * 100)}%
                </div>
                <div className="discount__value">
                    Вы экономите: <span>{getConvertPrice(old - current)}</span> руб.
                </div>
            </div>
        )}
    </div>
);

export default Price;
