import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import {
    FaSignInAlt,
    FaSignOutAlt,
    FaUserEdit,
    FaUser,
    FaBars
} from "react-icons/fa";
import { Navbar as BaseNavbar, Container, Nav } from "react-bootstrap";

import "./Navbar.scss";

const Navbar = ({ isAuth, handleSignIn, handleSignUp, handleSignOut }) => (
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
                        <button className="navbar-btn__first" onClick={handleSignIn}>
                            <FaSignInAlt />
                            Вход
                        </button>
                        <button
                            className="navbar-btn__second"
                            onClick={handleSignUp}
                        >
                            <FaUserEdit />
                            Регистрация
                        </button>
                    </Nav>
                ) : (
                    <Nav className="mr-auto">
                        <button
                            className="navbar-btn__first"
                            onClick={handleSignOut}
                        >
                            <FaSignOutAlt />
                            Выход
                        </button>
                        <Link to="/profile" className="navbar-btn__second">
                            <FaUser />
                            Профиль
                        </Link>
                    </Nav>
                )}
            </BaseNavbar.Collapse>
        </Container>
    </BaseNavbar>
);

Navbar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    handleSignIn: PropTypes.func.isRequired,
    handleSignUp: PropTypes.func.isRequired,
    handleSignOut: PropTypes.func.isRequired
};

export default Navbar;
