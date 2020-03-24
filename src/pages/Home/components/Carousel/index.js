import React from "react";
import { Carousel as BaseCarousel } from "react-bootstrap";

import carouselJSON from "./carousel.json";
import "./Carousel.scss";

const Carousel = () =>
    carouselJSON.length > 0 && (
        <BaseCarousel fade>
            {carouselJSON.map(item => (
                <BaseCarousel.Item key={item.id}>
                    <img className="d-block w-100" src={require(`assets/${item.image}`)} alt="Slide" />
                </BaseCarousel.Item>
            ))}
        </BaseCarousel>
    );

export default Carousel;
