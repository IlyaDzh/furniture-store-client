import React, { useState } from "react";

import { Section } from "components";
import orderCallBg from "assets/home/order/bg.jpg";
import "./OrderCall.scss";

const OrderCall = () => {
    const [callReady, setCallReady] = useState(false);

    return (
        <Section
            className="order-call"
            style={{
                background: `#e7eced url(${orderCallBg}) no-repeat center center`,
                backgroundSize: "cover"
            }}
        >
            <h3 className="order-call__title">Нужна консультация?</h3>
            {callReady ? (
                <p className="order-call--ready">
                    Спасибо! Ваша заявка отправлена!
                    <br />
                    Наш менеджер свяжется с вами в течение 15 минут.
                    <br />
                    Пожалуйста, ожидайте!
                </p>
            ) : (
                <>
                    <h4 className="order-call__subtitle">
                        Заполните форму, и наш менеджер свяжется с Вами в течение 15 минут.
                    </h4>
                    <form>
                        <div className="row">
                            <div className="col-md-4">
                                <input
                                    className="form-control order-call__input"
                                    placeholder="Ваше имя"
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    className="form-control order-call__input"
                                    placeholder="+7 (___) ___-___-__"
                                />
                            </div>
                            <div className="col-md-4">
                                <button
                                    className="btn btn-orange"
                                    type="button"
                                    onClick={() => setCallReady(true)}
                                >
                                    Заказать звонок
                                </button>
                            </div>
                        </div>
                    </form>
                </>
            )}
        </Section>
    );
};

export default OrderCall;
