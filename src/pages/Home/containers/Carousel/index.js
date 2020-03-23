import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Carousel as BaseCarousel } from '../../components';
import { homeActions } from 'actions';

const Carousel = ({ fetchCarousel, carousel }) => {
    useEffect(() => {
        if (!carousel.length) {
            fetchCarousel();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carousel]);

    return <BaseCarousel items={carousel} />
}

export default connect(
    ({ home }) => ({
        carousel: home.carousel
    }),
    homeActions
)(Carousel);