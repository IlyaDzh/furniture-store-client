import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Navbar } from 'components';
import logo from 'assets/image/logo.png';
import bell from 'assets/image/header/bell.png';
import phone from 'assets/image/header/phone.png';
import pin from 'assets/image/header/pin.png';
import './Header.scss';

import catalogJSON from 'catalog.json';

const Header = () => {
    return (
        <header className='header'>
            <Navbar />

            <div className='header-top'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 d-flex justify-content-center">
                            <Link to="#1">
                                <img className="img-fluid pt-3 pb-3" src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="col-md-8 d-flex justify-content-around pt-3 pb-3">
                            <div className="header-info">
                                <img src={pin} alt="Location" />
                                <div>
                                    <div className="header-info__title">Ваш город:</div>
                                    <Link to="#2" className="header-info__location">Москва</Link>
                                </div>
                            </div>
                            <div className="header-info">
                                <img src={bell} alt="Feedback" />
                                <div>
                                    <div className="header-info__title">sale@bestmebelshop.ru</div>
                                    <Link to="#3" className="header-info__feedback">Обратный звонок</Link>
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

            <div className="header-products">
                <div className="container products-top">
                    <ul className="products-top__items">
                        {catalogJSON.top &&
                            catalogJSON.top.map(item => (
                                <li className="top-item" key={item.id}>
                                    <Link to="#">
                                        <div className="top-item__image">
                                            <img
                                                className="img-fluid"
                                                src={require(`assets/image/${item.image}`)}
                                                alt={item.title}
                                            />
                                        </div>
                                        <span className="top-item__title">{item.title}</span>
                                    </Link>
                                    <div className={
                                        classNames('categories__block',
                                            { 'categories__block--right': item.position === 'right' })
                                    }>

                                        {item.categories &&
                                            item.categories.map(category => (
                                                <ul className='categories-items' key={category.id}>
                                                    <li className='categories-items__title'>{category.title}</li>
                                                    {
                                                        category.content.map((item, index) => (
                                                            <li key={index}><Link to="#1">{item}</Link></li>
                                                        ))
                                                    }
                                                </ul>
                                            ))
                                        }
                                        
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="section-orange">
                    <div className="container products-bottom">
                        <ul className="products-bottom__items">
                            {catalogJSON.bottom &&
                                catalogJSON.bottom.map(item => (
                                    <li className="bottom-item" key={item.id}>
                                        <Link to="#">{item.title}</Link>
                                        <div className={
                                            classNames('categories__block',
                                                { 'categories__block--right': item.position === 'right' })
                                        }>

                                            {item.categories &&
                                                item.categories.map(category => (
                                                    <ul className='categories-items' key={category.id}>
                                                        <li className='categories-items__title'>{category.title}</li>
                                                        {
                                                            category.content.map((item, index) => (
                                                                <li key={index}><Link to="#1">{item}</Link></li>
                                                            ))
                                                        }
                                                    </ul>
                                                ))
                                            }

                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;