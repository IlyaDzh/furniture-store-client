import React, { useState } from 'react';
import { Navbar as BaseNavbar, Container, Nav } from 'react-bootstrap';

import { Modal } from 'components';
import './Navbar.scss';

const Navbar = props => {
    const [showRegister, setShowRegister] = useState(false);
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
                                onClick={() => setShowEntry(true)}
                            >
                                Вход
                            </Nav.Link>
                            <Nav.Link
                                className='navbar__register'
                                href="#8"
                                onClick={() => setShowRegister(true)}
                            >
                                Регистрация
                        </Nav.Link>
                        </Nav>
                    </BaseNavbar.Collapse>
                </Container>
            </BaseNavbar>

            <Modal show={showEntry} onHide={() => setShowEntry(false)}>
                Форма входа
            </Modal>
            <Modal show={showRegister} onHide={() => setShowRegister(false)}>
                Форма регистрации
            </Modal>
        </>
    )
}

export default Navbar;