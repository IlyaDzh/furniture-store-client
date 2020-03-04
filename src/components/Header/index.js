import React, { useEffect } from 'react';
import { } from 'react-bootstrap';

import { Navbar } from 'components';
import logo from 'assets/image/logo.png';
import bell from 'assets/image/header/bell.png';
import phone from 'assets/image/header/phone.png';
import pin from 'assets/image/header/pin.png';
import './Header.scss';

const Header = () => {

    useEffect(() => {
        console.log('render')
    }, [])

    return (
        <header className='header'>
            <Navbar />

            <div className='header-content'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 d-flex justify-content-center">
                            <a href="#1">
                                <img className="img-fluid pt-3 pb-3" src={logo} alt="" />
                            </a>
                        </div>
                        <div className="col-md-8 d-flex justify-content-around pt-3 pb-3">
                            <div className="header-info">
                                <img src={pin} alt="Location" />
                                <div>
                                    <div className="header-info__title">Ваш город:</div>
                                    <a href="#2" className="header-info__location">Москва</a>
                                </div>
                            </div>
                            <div className="header-info">
                                <img src={bell} alt="Feedback" />
                                <div>
                                    <div className="header-info__title">sale@bestmebelshop.ru</div>
                                    <a href="#3" className="header-info__feedback">Обратный звонок</a>
                                </div>
                            </div>
                            <div className="header-info">
                                <img src={phone} alt="Phone" />
                                <div>
                                    <div className="header-info__title">C 09:00 до 23:00</div>
                                    <a href="tel:74991107109" className="header-info__phone">+7 (499) 110-71-09</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

        </header>
    )
}

export default Header;