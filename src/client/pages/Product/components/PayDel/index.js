import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

import "./PayDel.scss";

const PayDel = () => (
    <div className='product-pay-del'>
        <div className="product-pay-del__item">
            <p>
                Для Вашего удобства фабрика мебели «ФКМ» предоставляет услугу
                профессиональной доставки мебели.
            </p>
            <Link to="/payment-and-delivery">
                Подробнее <IoIosArrowRoundForward />
            </Link>
        </div>
        <div className="product-pay-del__item">
            <p>Фабрика мебели «ФКМ» предлагает Вам несколько вариантов оплаты.</p>
            <Link to="/payment-and-delivery">
                Подробнее <IoIosArrowRoundForward />
            </Link>
        </div>
    </div>
);

export default PayDel;
