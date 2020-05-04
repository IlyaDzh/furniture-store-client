import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

import { ModalCall, ModalMeasurer } from "containers";
import "./Footer.scss";

const Footer = () => {
    const [showMeasurer, setShowMeasurer] = useState(false);
    const [showCall, setShowCall] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <ul className="footer-top__items">
                        <li>
                            <NavLink to="/catalog">Каталог</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">О фабрике</NavLink>
                        </li>
                        <li>
                            <NavLink to="/payment-and-delivery">
                                Оплата и доставка
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">Новости</NavLink>
                        </li>
                        <li>
                            <NavLink to="/comments">Отзывы</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Контакты</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-7 mb-3">
                            <h5 className="footer-middle__title">Наш каталог</h5>
                            <div className="footer-middle__catalog">
                                <ul className="footer-middle__catalog-items">
                                    <li>
                                        <Link to="/catalog/living-rooms">Гостиные</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/bedrooms">Спальни</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/kids-bedrooms">Детские</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/hallways">Прихожие</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/soft-furniture">Мягкая мебель</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/libraries">Библиотеки</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/kitchens">Кухни</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/sofas">Диваны</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/hangers">Вешалки</Link>
                                    </li>
                                </ul>
                                <ul className="footer-middle__catalog-items">
                                    <li>
                                        <Link to="/catalog/chest-of-drawers">Комоды</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/armchairs">Кресла</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/beds">Кровати</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/wall-shelves">Полки</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/tables">Столы</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/chairs">Стулья</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/cupboards">Тумбы</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/wardrobes">Шкафы</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog/mirrors">Зеркала</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-5 mb-3">
                            <h5 className="footer-middle__title">Контакты</h5>
                            <div className="footer-middle__contact">
                                <FaPhone className="contact__icon" />
                                <a href="tel:74991107109">+7 (499) 110-71-09</a>
                            </div>
                            <div className="footer-middle__contact">
                                <FaMapMarkerAlt className="contact__icon" />
                                г. Москва, ул. Островитянова, д. 9 корп.4
                            </div>
                            <div className="footer-middle__contact">
                                <FaEnvelope className="contact__icon" />
                                <a href="mailto:info@fkm.ru">info@fkm.ru</a>
                            </div>
                            <div className="mb-2">
                                <button
                                    className="btn btn-orange"
                                    onClick={() => setShowMeasurer(true)}
                                >
                                    Вызвать замерщика
                                </button>
                            </div>
                            <div>
                                <button
                                    className="btn btn-outline-orange"
                                    onClick={() => setShowCall(true)}
                                >
                                    Заказать звонок
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row footer-bottom__content">
                        <div className="col-md-7">
                            <p>
                                2014-2020 ФКМ&nbsp;|&nbsp;
                                <Link to="privacy-policy">
                                    Политика конфиденциальности
                                </Link>
                            </p>
                        </div>
                        <div className="col-md-5">
                            <Link to="sitemap">Карта сайта</Link>
                        </div>
                    </div>
                </div>
            </div>

            <ModalMeasurer
                show={showMeasurer}
                onHide={() => setShowMeasurer(false)}
            />
            <ModalCall show={showCall} onHide={() => setShowCall(false)} />
        </footer>
    );
};

export default Footer;
