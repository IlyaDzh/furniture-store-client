import React from "react";

import "./PayDelInfo.scss";

import image1 from "assets/payment-delivery/1.png";
import image2 from "assets/payment-delivery/2.png";
import image3 from "assets/payment-delivery/3.png";
import image4 from "assets/payment-delivery/4.png";
import image5 from "assets/payment-delivery/5.png";
import image6 from "assets/payment-delivery/6.png";
import image7 from "assets/payment-delivery/7.png";

const PayDelInfo = () => {
    return (
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
                    <li>
                        Оплата наличными курьеру при доставке по Москве и ближайшему Подмосковью. А также в случае
                        самовывоза.
                    </li>
                    <li>Оплата по безналичному расчету для юридических лиц</li>
                    <li>Оплата банковской картой по терминалу в случае самовывоза</li>
                    <li>В рассрочку. Подробная информация на этой странице странице</li>
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
                    <li>
                        <b>Самовывоз.</b> При наличии товара на складе Вы можете забрать его самовывозом по адресу:
                        Шоссе Энтузиастов, д. 31, стр.39, 1 этаж, павильоны Г-5, Г-6, Г-7
                    </li>
                    <li>
                        <b>Курьером по Москве.</b> Доставка до подъезда по Москве в пределах МКАД и Садового кольца
                        1000руб. В пределах Садового кольца 1500руб. В пределах МКАД и Бетонного кольца А-108
                        (2-бетонка) 1000руб. +35руб 1км. (от МКАД). За бетонным кольцом А-108 (2-бетонка) 40руб. 1км.
                        (от МКАД). По Москве в пределах МКАД и Садового кольца. Доставка к назначенному времени 3500руб.
                    </li>
                    <li>
                        <b>Транспортной компанией.</b> Доставка мебели в отдаленные регионы до 1000 км собственным
                        транспортом фирмы с оплатой при получении заказа Наш интернет-магазин осуществляет поставку
                        мебели в регионы через транспортные компании Стоимость доставки мебели в транспортную кампанию —
                        1500 руб.
                    </li>
                </ol>
            </div>
        </>
    );
};

export default PayDelInfo;
