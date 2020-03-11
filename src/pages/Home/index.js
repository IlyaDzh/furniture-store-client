import React, { useState } from 'react';

import { Carousel, Section, Slider, CardNews, Modal, Comment } from 'components';
import designBg from 'assets/home/design/bg.png';
import feedbackBg from 'assets/home/feedback/bg.jpg';
import './Home.scss';

import popularJSON from 'json/popular.json';
import carouselJSON from 'json/carousel.json';
import advantagesJSON from 'json/advantages.json';
import newsJSON from 'json/news.json';
import newCommentsJSON from 'json/newComments.json';

const Home = () => {
    const [showIndividual, setShowIndividual] = useState(false);

    return (
        <section className='home'>
            <Carousel items={carouselJSON} />

            <Section title='Популярные модели сезона'>
                <Slider items={popularJSON} />
            </Section>

            <Section title='Новые модели в каталоге'>
                <Slider items={popularJSON} />
            </Section>

            <Section className='section-orange advantages' title='Наши преимущества'>
                <div className="row">
                    {advantagesJSON.length > 0 && (
                        advantagesJSON.map(item => (
                            <div key={item.id} className="advantages-item col-xs-6 col-sm-4 col-lg-2">
                                <div className="advantages-item__image">
                                    <img src={require(`assets/${item.image}`)} alt='Advantages' />
                                </div>
                                <div className="advantages-item__desc">{item.description}</div>
                            </div>
                        ))
                    )}
                </div>
            </Section>

            <Section title='Последние новости'>
                <div className="row">
                    {newsJSON.length > 0 && (
                        newsJSON.map(item => (
                            <CardNews key={item.id} {...item} />
                        ))
                    )}
                </div>
            </Section>

            <Section
                className='design'
                style={{
                    background: `#e7eced url(${designBg}) no-repeat right top`,
                    backgroundSize: 'contain'
                }}
            >
                <h3 className='design__title'>Хотите индивидуальный дизайн мебели?</h3>
                <h4 className='design__subtitle'>Отправим к вам лучшего дизайнера-замерщика!</h4>
                <button className='btn btn-orange' onClick={() => setShowIndividual(true)}>Вызвать замерщика</button>
            </Section>

            <Section title='Отзывы наших клиентов'>
                <div className="row">
                    {newCommentsJSON.length > 0 && (
                        newCommentsJSON.map(item => (
                            <Comment key={item.id} {...item} />
                        ))
                    )}
                </div>
            </Section>

            <Section
                className='feedback'
                style={{
                    background: `#e7eced url(${feedbackBg}) no-repeat center center`,
                    backgroundSize: 'cover'
                }}
            >
                <h3 className='feedback__title'>Нужна консультация?</h3>
                <h4 className='feedback__subtitle'>Заполните форму, и наш менеджер свяжется с Вами в течение 15 минут.</h4>
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <input className="form-control feedback__input" placeholder="Ваше имя" />
                        </div>
                        <div className="col-md-4">
                            <input className="form-control feedback__input" placeholder="+7 (___) ___-___-__" />
                        </div>
                        <div className="col-md-4">
                            <button className='btn btn-orange' type="button">Заказать звонок</button>
                        </div>
                    </div>
                </form>
            </Section>

            <Modal show={showIndividual} onHide={() => setShowIndividual(false)}>
                Форма заказа замерщика
            </Modal>
        </section>
    )
}

export default Home;