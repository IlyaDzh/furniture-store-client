import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaSignInAlt, FaUserEdit } from 'react-icons/fa';
import { Navbar as BaseNavbar, Container, Nav } from 'react-bootstrap';

import { Modal } from 'components';
import './Navbar.scss';

const Navbar = props => {
    const [showRegistry, setShowRegistry] = useState(false);
    const [showEntry, setShowEntry] = useState(false);

    return (
        <>
            <BaseNavbar className='navbar-top' expand="md" {...props}>
                <Container>
                    <BaseNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BaseNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className='nav-link' to="/catalog">Каталог</NavLink >
                            <NavLink className='nav-link' to="/info">О фабрике</NavLink >
                            <NavLink className='nav-link' to="/payment">Оплата и доставка</NavLink >
                            <NavLink className='nav-link' to="/news">Новости</NavLink >
                            <NavLink className='nav-link' to="/comments">Отзывы</NavLink >
                            <NavLink className='nav-link' to="/contacts">Контакты</NavLink >
                        </Nav>
                        <Nav className="mr-auto">
                            <Link
                                to="#7"
                                className='nav-link navbar__entry'
                                onClick={() => setShowEntry(true)}
                            >
                                <FaSignInAlt style={{ fontSize: '16', marginRight: '4' }} />
                                Вход
                            </Link>
                            <Link
                                className='nav-link navbar__registry'
                                to="#8"
                                onClick={() => setShowRegistry(true)}
                            >
                                <FaUserEdit style={{ fontSize: '16', marginRight: '4' }} />
                                Регистрация
                        </Link>
                        </Nav>
                    </BaseNavbar.Collapse>
                </Container>
            </BaseNavbar>

            <Modal show={showEntry} onHide={() => setShowEntry(false)}>
                Форма входа
            </Modal>
            <Modal show={showRegistry} onHide={() => setShowRegistry(false)}>
                Форма регистрации
            </Modal>
        </>
    )
}

export default Navbar;