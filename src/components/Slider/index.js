import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseSlider from "react-slick";
import { IconContext } from "react-icons";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { Card } from 'components';
import './Slider.scss';

const SliderArrow = ({ onClick, to }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames('btn-arrow', { 'btn-arrow--prev': to === 'prev', 'btn-arrow--next': to === 'next' })}
        >
            <IconContext.Provider value={{ className: "btn-arrow__icon" }} >
                {to === 'prev' ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </IconContext.Provider>
        </button >
    );
}

const Slider = ({ items }) => {
    const settings = {
        infinite: true,
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