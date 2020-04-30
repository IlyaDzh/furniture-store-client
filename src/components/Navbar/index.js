import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { FaSignInAlt, FaUserEdit, FaBars } from "react-icons/fa";
import { Navbar as BaseNavbar, Container, Nav } from "react-bootstrap";

import "./Navbar.scss";

const Navbar = ({ isAuth, handleClickLogin, handleClickReg }) => (
    <BaseNavbar className="navbar-top" expand="md">
        <Container>
            <BaseNavbar.Toggle aria-controls="basic-navbar-nav">
                <FaBars className="navbar-toggler__icon" />
            </BaseNavbar.Toggle>
            <BaseNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/catalog">
                        Каталог
                    </NavLink>
                    <NavLink className="nav-link" to="/about">
                        О фабрике
                    </NavLink>
                    <NavLink className="nav-link" to="/payment-and-delivery">
                        Оплата и доставка
                    </NavLink>
                    <NavLink className="nav-link" to="/news">
                        Новости
                    </NavLink>
                    <NavLink className="nav-link" to="/comments">
                        Отзывы
                    </NavLink>
                    <NavLink className="nav-link" to="/contacts">
                        Контакты
                    </NavLink>
                </Nav>
                {!isAuth ? (
                    <Nav className="mr-auto">
                        <Link
                            to="#login"
                            className="nav-link navbar__entry"
                            onClick={handleClickLogin}
                        >
                            <FaSignInAlt
                                style={{ fontSize: "16", marginRight: "6" }}
                            />
                            Вход
                        </Link>
                        <Link
                            to="#register"
                            className="nav-link navbar__registry"
                            onClick={handleClickReg}
                        >
                            <FaUserEdit
                                style={{ fontSize: "16", marginRight: "6" }}
                            />
                            Регистрация
                        </Link>
                    </Nav>
                ) : (
                    <Nav className="mr-auto">
                        <Link to="#exit" className="nav-link navbar__entry">
                            <FaSignInAlt
                                style={{ fontSize: "16", marginRight: "6" }}
                            />
                            Выход
                        </Link>
                        <Link to="/profile" className="nav-link navbar__registry">
                            <FaUserEdit
                                style={{ fontSize: "16", marginRight: "6" }}
                            />
                            Профиль
                        </Link>
                    </Nav>
                )}
            </BaseNavbar.Collapse>
        </Container>
    </BaseNavbar>
);

Navbar.propTypes = {
    isAuth: PropTypes.bool,
    handleClickLogin: PropTypes.func,
    handleClickReg: PropTypes.func
};

export default Navbar;
