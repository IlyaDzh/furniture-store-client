import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import { SliderArrow } from "client/components";
import { baseUrl } from "utils/constants";
import "./Gallery.scss";

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

const Gallery = ({ images }) => {
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
        <div className="product-gallery">
            <Slider
                asNavFor={nav.nav2}
                ref={slider => (slider1.current = slider)}
                {...settings1}
            >
                {images &&
                    images.map((item, index) => (
                        <div key={index} className="big-slick__image">
                            <img src={`${baseUrl}/${item}`} alt="" />
                        </div>
                    ))}
            </Slider>
            <Slider
                asNavFor={nav.nav1}
                ref={slider => (slider2.current = slider)}
                {...settings2}
            >
                {images &&
                    images.map((item, index) => (
                        <div key={index} className="small-slick__image">
                            <img src={`${baseUrl}/${item}`} alt="" />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;
