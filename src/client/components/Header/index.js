import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BaseNavbar, Container, Nav } from "react-bootstrap";

import logo from "assets/logo.png";
import bell from "assets/header/bell.png";
import phone from "assets/header/phone.png";
import pin from "assets/header/pin.png";
import "./Header.scss";

import catalogJSON from "utils/catalog.json";

const Header = () => (
    <header className="header">
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 d-flex justify-content-center">
                        <Link to="/">
                            <img
                                className="img-fluid pt-3 pb-3"
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="col-md-8 d-flex justify-content-around pt-3 pb-3">
                        <div className="header-info">
                            <img src={pin} alt="Location" />
                            <div>
                                <div className="header-info__title">Ваш город:</div>
                                <Link to="#2" className="header-info__location">
                                    Москва
                                </Link>
                            </div>
                        </div>
                        <div className="header-info">
                            <img src={bell} alt="Feedback" />
                            <div>
                                <div className="header-info__title">info@fkm.ru</div>
                                <Link to="#3" className="header-info__feedback">
                                    Обратный звонок
                                </Link>
                            </div>
                        </div>
                        <div className="header-info">
                            <img src={phone} alt="Phone" />
                            <div>
                                <div className="header-info__title">
                                    C 09:00 до 23:00
                                </div>
                                <a
                                    href="tel:74991107109"
                                    className="header-info__phone"
                                >
                                    +7 (499) 110-71-09
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-products">
            <div className="container products-top">
                <ul className="products-top__items">
                    {catalogJSON.top &&
                        catalogJSON.top.map(item => (
                            <li className="top-item" key={item.id}>
                                <Link to={`/catalog/${item.path}`}>
                                    <div className="top-item__image">
                                        <img
                                            className="img-fluid"
                                            src={require(`assets/${item.image}`)}
                                            alt={item.title}
                                        />
                                    </div>
                                    <span className="top-item__title">
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="section-orange">
                <div className="container products-bottom">
                    <ul className="products-bottom__items">
                        {catalogJSON.bottom &&
                            catalogJSON.bottom.map(item => (
                                <li className="bottom-item" key={item.id}>
                                    <Link to={`/catalog/${item.path}`}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <div className="products-mob">
                <Container>
                    <BaseNavbar expand="md">
                        <BaseNavbar.Toggle
                            className="products-mob__button"
                            aria-controls="basic-navbar-nav"
                        >
                            Каталог мебели
                        </BaseNavbar.Toggle>
                        <BaseNavbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                {catalogJSON.top &&
                                    catalogJSON.top.map(item => (
                                        <Link
                                            key={item.id}
                                            className="nav-link"
                                            to={`/catalog/${item.path}`}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                {catalogJSON.bottom &&
                                    catalogJSON.bottom.map(item => (
                                        <Link
                                            key={item.id}
                                            className="nav-link"
                                            to={`/catalog/${item.path}`}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                            </Nav>
                        </BaseNavbar.Collapse>
                    </BaseNavbar>
                </Container>
            </div>
        </div>
    </header>
);

export default Header;
