import React from "react";
import PropTypes from "prop-types";

import "./Info.scss";

import image1 from "assets/payment-delivery/1.png";
import image2 from "assets/payment-delivery/2.png";
import image3 from "assets/payment-delivery/3.png";
import image4 from "assets/payment-delivery/4.png";
import image5 from "assets/payment-delivery/5.png";
import image6 from "assets/payment-delivery/6.png";
import image7 from "assets/payment-delivery/7.png";

const Info = ({ payment, delivery }) => (
    <>
        <div className="payment">
            <div className="pay-del__title">
                <h4>Способы оплаты заказов</h4>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-3 col-xl-2">
                        <div className="pay-del__image">
                            <img src={image1} alt="" />
                        </div>
                        <p className="pay-del__desc">Наличными</p>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-2">
                        <div className="pay-del__image">
                            <img src={image2} alt="" />
                        </div>
                        <p className="pay-del__desc">По безналичному расчету</p>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-2">
                        <div className="pay-del__image">
                            <img src={image3} alt="" />
                        </div>
                        <p className="pay-del__desc">Оплата картой по терминалу</p>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-2">
                        <div className="pay-del__image">
                            <img src={image4} alt="" />
                        </div>
                        <p className="pay-del__desc">В рассрочку</p>
                    </div>
                </div>
            </div>
            <ol className="pay-del__list">
                {payment &&
                    payment.map(item => (
                        <li key={item._id}>
                            <b>{item.title}</b> {item.content}
                        </li>
                    ))}
            </ol>
        </div>

        <div className="delivery">
            <div className="pay-del__title">
                <h4>Способы доставки заказов</h4>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-3 col-xl-2">
                        <div className="pay-del__image">
                            <img src={image5} alt="" />
                        </div>
                        <p className="pay-del__desc">Самовывоз</p>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-2">
                        <div className="pay-del__image">
                            <img src={image6} alt="" />
                        </div>
                        <p className="pay-del__desc">Курьером по Москве</p>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-2">
                        <div className="pay-del__image">
                            <img src={image7} alt="" />
                        </div>
                        <p className="pay-del__desc">Транспортной компанией</p>
                    </div>
                </div>
            </div>
            <ol className="pay-del__list">
                {delivery &&
                    delivery.map(item => (
                        <li key={item._id}>
                            <b>{item.title}</b> {item.content}
                        </li>
                    ))}
            </ol>
        </div>
    </>
);

Info.propTypes = {
    payment: PropTypes.arrayOf(PropTypes.object),
    delivery: PropTypes.arrayOf(PropTypes.object)
};

export default Info;
