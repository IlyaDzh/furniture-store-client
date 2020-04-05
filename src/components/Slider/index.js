import React from 'react';
import PropTypes from 'prop-types';
import BaseSlider from "react-slick";

import { SliderArrow, Card } from 'components';
import './Slider.scss';

const Slider = ({ items }) => {
    const settings = {
        infinite: true,
        swipe: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <SliderArrow to='prev' />,
        nextArrow: <SliderArrow to='next' />,
        responsive: [
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
            {items.map(card => <Card key={card.id} {...card} />)}
        </BaseSlider>
    )
}

Slider.propTypes = {
    items: PropTypes.array
}

export default Slider;