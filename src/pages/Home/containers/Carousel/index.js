import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Carousel as BaseCarousel } from '../../components';
import { homeActions } from 'actions';

const Carousel = ({ fetchCarousel, carousel }) => {
    useEffect(() => {
        if (!carousel.length) {
            fetchCarousel();
        }
    }, [carousel]);

    return <BaseCarousel items={carousel} />
}

export default connect(
    ({ home }) => ({
        carousel: home.carousel
    }),
    homeActions
)(Carousel);