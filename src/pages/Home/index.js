import React from 'react';

import { Carousel, Section, Slider } from 'components';
import popularJSON from 'popular.json';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Carousel />

            <Section title='Популярные модели сезона'>
                <Slider items={popularJSON} />
            </Section>

            <Section title='Новые модели в каталоге'>
                <Slider items={popularJSON} />
            </Section>
        </>
    )
}

export default Home;