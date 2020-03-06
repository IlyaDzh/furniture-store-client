import React, { useState } from 'react';
import { FaSignInAlt, FaUserEdit } from 'react-icons/fa';
import { Navbar as BaseNavbar, Container, Nav } from 'react-bootstrap';

import { Modal } from 'components';
import './Navbar.scss';

const Navbar = props => {
    const [showRegistry, setShowRegistry] = useState(false);
    const [showEntry, setShowEntry] = useState(false);

    return (
        <>
            <BaseNavbar expand="md" {...props}>
                <Container>
                    <BaseNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BaseNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#1">Акции</Nav.Link>
                            <Nav.Link href="#2">О фабрике</Nav.Link>
                            <Nav.Link href="#3">Оплата</Nav.Link>
                            <Nav.Link href="#4">Доставка</Nav.Link>
                            <Nav.Link href="#5">Новости</Nav.Link>
                            <Nav.Link href="#6">Контакты</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link
                                href="#7"
                                className='navbar__entry'
                                onClick={() => setShowEntry(true)}
                            >
                                <FaSignInAlt style={{ fontSize:'16', marginRight: '4' }} />
                                Вход
                            </Nav.Link>
                            <Nav.Link
                                className='navbar__registry'
                                href="#8"
                                onClick={() => setShowRegistry(true)}
                            >
                                <FaUserEdit style={{ fontSize:'16', marginRight: '4' }} />
                                Регистрация
                        </Nav.Link>
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