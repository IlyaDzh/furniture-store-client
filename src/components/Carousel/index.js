import React from 'react';
import PropTypes from 'prop-types';
import { Carousel as BaseCarousel } from 'react-bootstrap';

import './Carousel.scss';

const Carousel = ({ items }) => (
    items.length > 0 && (
        <BaseCarousel fade>
            {
                items.map(item => (
                    <BaseCarousel.Item key={item.id}>
                        <img
                            className="d-block w-100"
                            src={require(`assets/image/${item.image}`)}
                            alt="Slide"
                        />
                    </BaseCarousel.Item>
                ))
            }
        </BaseCarousel>
    )
)

Carousel.propTypes = {
    items: PropTypes.array
}

export default Carousel;