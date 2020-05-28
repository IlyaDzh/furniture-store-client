import React from "react";
import PropTypes from "prop-types";
import { FiPhone, FiMail, FiWatch, FiMapPin } from "react-icons/fi";

import "./List.scss";

const List = ({ number, email, time, address_office, address_prod }) => (
    <div className="contacts-list">
        {number && (
            <div className="contacts-list__item">
                <FiPhone className="item__icon" />
                <div className="item__info">
                    <p>Телефон:</p>
                    <a href={`tel:${Number(number.replace(/\D+/g, ""))}`}>
                        {number}
                    </a>
                </div>
            </div>
        )}
        {email && (
            <div className="contacts-list__item">
                <FiMail className="item__icon" />
                <div className="item__info">
                    <p>Электронная почта:</p>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        )}
        {time.length ? (
            <div className="contacts-list__item">
                <FiWatch className="item__icon" />
                <div className="item__info">
                    <p>Время работы:</p>
                    {time && time.map((item, i) => <p key={i}>{item}</p>)}
                </div>
            </div>
        ) : null}
        {address_office && (
            <div className="contacts-list__item">
                <FiMapPin className="item__icon" />
                <div className="item__info">
                    <p>Адрес офиса:</p>
                    <p>{address_office}</p>
                </div>
            </div>
        )}
        {address_prod && (
            <div className="contacts-list__item">
                <FiMapPin className="item__icon" />
                <div className="item__info">
                    <p>Адрес производства:</p>
                    <p>{address_prod}</p>
                </div>
            </div>
        )}
    </div>
);

List.propTypes = {
    number: PropTypes.string,
    email: PropTypes.string,
    time: PropTypes.arrayOf(PropTypes.string),
    address_office: PropTypes.string,
    address_prod: PropTypes.string
};

export default List;
