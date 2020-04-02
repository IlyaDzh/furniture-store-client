import React from "react";
import { FiPhone, FiMail, FiWatch, FiMapPin } from "react-icons/fi";

import "./ContactsList.scss";

const ContactsList = () => {
    return (
        <div className="contacts-list">
            <div className="contacts-list__item">
                <FiPhone className="item__icon" />
                <div className="item__info">
                    <p>Телефон:</p>
                    <a href="tel:74991107109">+7 (499) 110-71-09</a>
                </div>
            </div>
            <div className="contacts-list__item">
                <FiMail className="item__icon" />
                <div className="item__info">
                    <p>Электронная почта:</p>
                    <a href="mailto:info@fkm.ru">info@fkm.ru</a>
                </div>
            </div>
            <div className="contacts-list__item">
                <FiWatch className="item__icon" />
                <div className="item__info">
                    <p>Время работы:</p>
                    <p>Пн - Пт: 10:00-18:00</p>
                    <p>Сб - Вс: по предварительной записи.</p>
                </div>
            </div>
            <div className="contacts-list__item">
                <FiMapPin className="item__icon" />
                <div className="item__info">
                    <p>Адрес офиса:</p>
                    <p>г. Москва, ул. Островитянова, д. 9 корп.4</p>
                </div>
            </div>
            <div className="contacts-list__item">
                <FiMapPin className="item__icon" />
                <div className="item__info">
                    <p>Адрес производства:</p>
                    <p>г. Подольск, ул. Кутузовская, д. 3</p>
                </div>
            </div>
        </div>
    );
};

export default ContactsList;
