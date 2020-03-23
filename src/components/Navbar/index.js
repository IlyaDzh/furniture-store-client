import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSignInAlt, FaUserEdit, FaBars } from "react-icons/fa";
import { Navbar as BaseNavbar, Container, Nav } from "react-bootstrap";

import { ModalLogin, ModalRegister } from "components";
import "./Navbar.scss";

const Navbar = props => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <BaseNavbar className="navbar-top" expand="md" {...props}>
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
                            <NavLink className="nav-link" to="/payment">
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
                        <Nav className="mr-auto">
                            <Link
                                to="#login"
                                className="nav-link navbar__entry"
                                onClick={() => setShowLogin(true)}
                            >
                                <FaSignInAlt style={{ fontSize: "16", marginRight: "6" }} />
                                Вход
                            </Link>
                            <Link
                                className="nav-link navbar__registry"
                                to="#register"
                                onClick={() => setShowRegister(true)}
                            >
                                <FaUserEdit style={{ fontSize: "16", marginRight: "6" }} />
                                Регистрация
                            </Link>
                        </Nav>
                    </BaseNavbar.Collapse>
                </Container>
            </BaseNavbar>

            <ModalLogin
                show={showLogin}
                onHide={() => setShowLogin(false)}
                onToggle={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                }}
            />
            <ModalRegister show={showRegister} onHide={() => setShowRegister(false)} />
        </>
    );
};

export default Navbar;
