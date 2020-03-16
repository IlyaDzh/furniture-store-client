import React from 'react';

import { Section, Slider } from 'components';
import { Carousel, LastNews, Design, LastComments, Feedback } from './containers';
import { Advantages } from './components';
import './Home.scss';

import popularJSON from './popular.json';

const Home = () => (
    <section className='home'>
        <Carousel />

        <Section title='Популярные модели сезона'>
            <Slider items={popularJSON} />
        </Section>

        <Section title='Новые модели в каталоге'>
            <Slider items={popularJSON} />
        </Section>

        <Advantages />
        <LastNews />
        <Design />
        <LastComments />
        <Feedback />
    </section>
)

export default Home;