import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import { ScrollToTop, Section, SliderArrow } from "components";
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
                </div>
                <div className="col-lg-4">
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
                </div>
            </div>
        </Section>
    );
};

export default Product;
