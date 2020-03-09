import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
    <footer className='footer'>
        <div className="footer-top">
            <div className="container">
                <ul className='footer-top__items'>
                    <li><NavLink to='/catalog'>Каталог</NavLink></li>
                    <li><NavLink to='/info'>О фабрике</NavLink></li>
                    <li><NavLink to='/payment'>Оплата и доставка</NavLink></li>
                    <li><NavLink to='/news'>Новости</NavLink></li>
                    <li><NavLink to='/comments'>Отзывы</NavLink></li>
                    <li><NavLink to='/contacts'>Контакты</NavLink></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <h5 className='footer-bottom__title'>Наш каталог</h5>
                        <div className='footer-bottom__catalog'>
                            <ul className='footer-bottom__catalog-items'>
                                <li><Link to='#1'>Гостиные</Link></li>
                                <li><Link to='#1'>Спальни</Link></li>
                                <li><Link to='#1'>Детские</Link></li>
                                <li><Link to='#1'>Прихожие</Link></li>
                                <li><Link to='#1'>Мягкая мебель</Link></li>
                                <li><Link to='#1'>Библиотеки</Link></li>
                                <li><Link to='#1'>Кухни</Link></li>
                                <li><Link to='#1'>Диваны</Link></li>
                            </ul>
                            <ul className='footer-bottom__catalog-items'>
                                <li><Link to='#2'>Комоды</Link></li>
                                <li><Link to='#2'>Кресла</Link></li>
                                <li><Link to='#2'>Кровати</Link></li>
                                <li><Link to='#2'>Полки</Link></li>
                                <li><Link to='#2'>Столы</Link></li>
                                <li><Link to='#2'>Стулья</Link></li>
                                <li><Link to='#2'>Тумбы</Link></li>
                                <li><Link to='#2'>Шкафы</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                        <h5 className='footer-bottom__title'>Контакты</h5>
                        <div>+7 (499) 110-71-09</div>
                        <div>г. Москва, ул. Островитянова, д. 9 корп.4</div>
                        <div>sale@bestmebelshop.ru</div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <button className='btn btn-orange'>Вызвать замерщика</button>
                        </div>
                        <div>
                            <button className='btn btn-orange'>Заказать звонок</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;