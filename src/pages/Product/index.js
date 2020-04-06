import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Tabs, Tab } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import Slider from "react-slick";

import { ScrollToTop, Section, SliderArrow, ModalOneClick } from "components";
import "./Product.scss";

import image1 from "assets/product/1.jpg";
import image2 from "assets/product/2.jpg";
import image3 from "assets/product/3.jpg";
import image4 from "assets/product/4.jpg";
import image5 from "assets/product/5.jpg";
import image6 from "assets/product/6.jpg";

const settings1 = {
    className: "big-slick",
    speed: 400,
    fade: true,
    swipe: false,
    arrows: false
};

const settings2 = {
    className: "small-slick",
    speed: 400,
    swipe: false,
    slidesToShow: 4,
    focusOnSelect: true,
    prevArrow: <SliderArrow to="prev" />,
    nextArrow: <SliderArrow to="next" />,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }
    ]
};

const Product = () => {
    const [showFastBuy, setShowFastBuy] = useState(false);
    const [nav, setNav] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setNav({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, []);

    return (
        <Section className="product" title="Каталог">
            <ScrollToTop />
            <div className="breadcrumbs">
                <Link to="/catalog">Каталог</Link> >{" "}
                <Link to="/catalog/3412">Мебель для спальни</Link> >{" "}
                <span>Спальня Аделаида с 5-дверным шкафом (орех фарина)</span>
            </div>
            <h4 className="product__name">
                Спальня Аделаида с 5-дверным шкафом (орех фарина)
            </h4>
            <div className="row">
                <div className="col-lg-8">
                    <Slider
                        asNavFor={nav.nav2}
                        ref={slider => (slider1.current = slider)}
                        {...settings1}
                    >
                        <div className="big-slick__image">
                            <img src={image1} alt="" />
                        </div>
                        <div className="big-slick__image">
                            <img src={image2} alt="" />
                        </div>
                        <div className="big-slick__image">
                            <img src={image3} alt="" />
                        </div>
                        <div className="big-slick__image">
                            <img src={image4} alt="" />
                        </div>
                        <div className="big-slick__image">
                            <img src={image5} alt="" />
                        </div>
                        <div className="big-slick__image">
                            <img src={image6} alt="" />
                        </div>
                    </Slider>
                    <Slider
                        asNavFor={nav.nav1}
                        ref={slider => (slider2.current = slider)}
                        {...settings2}
                    >
                        <div className="small-slick__image">
                            <img src={image1} alt="" />
                        </div>
                        <div className="small-slick__image">
                            <img src={image2} alt="" />
                        </div>
                        <div className="small-slick__image">
                            <img src={image3} alt="" />
                        </div>
                        <div className="small-slick__image">
                            <img src={image4} alt="" />
                        </div>
                        <div className="small-slick__image">
                            <img src={image5} alt="" />
                        </div>
                        <div className="small-slick__image">
                            <img src={image6} alt="" />
                        </div>
                    </Slider>
                    <Tabs transition={false}>
                        <Tab eventKey="chars" title="Характеристики">
                            <table className="chars-table">
                                <tbody>
                                    <tr>
                                        <td>Форма:</td>
                                        <td>Прямые</td>
                                    </tr>
                                    <tr>
                                        <td>Материал:</td>
                                        <td>МДФ</td>
                                    </tr>
                                    <tr>
                                        <td>Назначение:</td>
                                        <td>Мебель для спальни</td>
                                    </tr>
                                    <tr>
                                        <td>Стиль:</td>
                                        <td>Барокко</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет:</td>
                                        <td>Орех</td>
                                    </tr>
                                    <tr>
                                        <td>Коллекция:</td>
                                        <td>Аделаида</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tab>
                        <Tab eventKey="pay-and-del" title="Доставка и оплата">
                            <div className="product__pay-del">
                                <p>
                                    Для Вашего удобства фабрика мебели «ФКМ»
                                    предоставляет услугу профессиональной доставки
                                    мебели.
                                </p>
                                <Link to="/payment-and-delivery">
                                    Подробнее <IoIosArrowRoundForward />
                                </Link>
                            </div>
                            <div className="product__pay-del">
                                <p>
                                    Фабрика мебели «ФКМ» предлагает Вам несколько
                                    вариантов оплаты.
                                </p>
                                <Link to="/payment-and-delivery">
                                    Подробнее <IoIosArrowRoundForward />
                                </Link>
                            </div>
                        </Tab>
                        <Tab eventKey="comments" title="Отзывы">
                            <h5 className="comments__title">
                                Нам важно ваше мнение
                            </h5>
                            <Form className="product-comments">
                                <Form.Row>
                                    <Form.Group as={Col} md={6}>
                                        <Form.Group>
                                            <Form.Control placeholder="Пожалуйста, представьтесь" />
                                        </Form.Group>
                                        <Form.Group style={{ marginBottom: "0" }}>
                                            <Form.Control
                                                type="email"
                                                placeholder="Введите ваш E-mail"
                                            />
                                        </Form.Group>
                                    </Form.Group>
                                    <Form.Group as={Col} md={6}>
                                        <Form.Control
                                            placeholder="Ваш отзыв"
                                            as="textarea"
                                            rows="3"
                                            style={{ height: "100%" }}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        sm={12}
                                        md={4}
                                        style={{ margin: "0 auto" }}
                                    >
                                        <Button className="btn-orange">
                                            Отправить
                                        </Button>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-lg-4 price-wrapper">
                    <div className="product-price">
                        <div className="product-price__old">77 280 руб.</div>
                        <div className="product-price__current">
                            65 688{" "}
                            <span className="product-price__current-measure">
                                руб / шт
                            </span>
                        </div>
                    </div>
                    <div className="product-discount">
                        <div className="product-discount__percent">-15%</div>
                        <div className="product-discount__value">
                            Вы экономите: <span>11 592</span> руб.
                        </div>
                    </div>
                    <div className="product-cart">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} xs="3">
                                    <Form.Control type="number" defaultValue="1" />
                                </Form.Group>
                                <Form.Group as={Col} xs="9">
                                    <Button className="btn-orange">
                                        <FaShoppingCart
                                            style={{
                                                fontSize: "18",
                                                marginRight: "5"
                                            }}
                                        />
                                        В корзину
                                    </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                        <Link
                            to="#buy"
                            className="product-cart__buy"
                            onClick={() => setShowFastBuy(true)}
                        >
                            <MdTouchApp
                                style={{
                                    fontSize: "20",
                                    marginRight: "3",
                                    marginBottom: "6"
                                }}
                            />
                            Купить в 1 клик
                        </Link>
                    </div>
                </div>
            </div>
            <ModalOneClick show={showFastBuy} onHide={() => setShowFastBuy(false)} />
        </Section>
    );
};

export default Product;
