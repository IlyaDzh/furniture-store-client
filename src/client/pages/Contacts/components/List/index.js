import React from "react";
import PropTypes from "prop-types";
import { FiPhone, FiMail, FiWatch, FiMapPin } from "react-icons/fi";

import "./List.scss";

const List = ({ number, email, time, address_office, address_prod }) => (
    <div className="contacts-list">
        <div className="contacts-list__item">
            <FiPhone className="item__icon" />
            <div className="item__info">
                <p>Телефон:</p>
                {number &&
                    number.map((item, i) => (
                        <a href={`tel:${Number(item.replace(/\D+/g, ""))}`} key={i}>
                            {item}
                        </a>
                    ))}
            </div>
        </div>
        <div className="contacts-list__item">
            <FiMail className="item__icon" />
            <div className="item__info">
                <p>Электронная почта:</p>
                {email &&
                    email.map((item, i) => (
                        <a href={`mailto:${item}`} key={i}>
                            {item}
                        </a>
                    ))}
            </div>
        </div>
        <div className="contacts-list__item">
            <FiWatch className="item__icon" />
            <div className="item__info">
                <p>Время работы:</p>
                {time && time.map((item, i) => <p key={i}>{item}</p>)}
            </div>
        </div>
        <div className="contacts-list__item">
            <FiMapPin className="item__icon" />
            <div className="item__info">
                <p>Адрес офиса:</p>
                {address_office &&
                    address_office.map((item, i) => <p key={i}>{item}</p>)}
            </div>
        </div>
        <div className="contacts-list__item">
            <FiMapPin className="item__icon" />
            <div className="item__info">
                <p>Адрес производства:</p>
                {address_prod &&
                    address_prod.map((item, i) => <p key={i}>{item}</p>)}
            </div>
        </div>
    </div>
);

List.propTypes = {
    number: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.arrayOf(PropTypes.string),
    time: PropTypes.arrayOf(PropTypes.string),
    address_office: PropTypes.arrayOf(PropTypes.string),
    address_prod: PropTypes.arrayOf(PropTypes.string)
};

export default List;
