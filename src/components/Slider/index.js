import React from "react";
import PropTypes from "prop-types";
import BaseSlider from "react-slick";

import { SliderArrow, CardProduct } from "components";
import "./Slider.scss";

const Slider = ({ items, fetchAddToCart }) => {
    const settings = {
        infinite: true,
        swipe: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <SliderArrow to="prev" />,
        nextArrow: <SliderArrow to="next" />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <BaseSlider {...settings}>
            {items.map(card => (
                <CardProduct key={card._id} addToCart={fetchAddToCart} {...card} />
            ))}
        </BaseSlider>
    );
};

Slider.propTypes = {
    items: PropTypes.array
};

export default Slider;
