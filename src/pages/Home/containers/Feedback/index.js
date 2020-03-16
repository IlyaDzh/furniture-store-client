import React, { useState } from 'react';

import { Section } from 'components';
import feedbackBg from 'assets/home/feedback/bg.jpg';
import './Feedback.scss';

const Feedback = () => {
    const [feedbackReady, setFeedbackReady] = useState(false);

    return (
        <Section
            className='feedback'
            style={{ background: `#e7eced url(${feedbackBg}) no-repeat center center`, backgroundSize: 'cover' }}
        >
            <h3 className='feedback__title'>Нужна консультация?</h3>
            {
                feedbackReady ? (
                    <p className='feedback--ready'>
                        Спасибо! Ваша заявка отправлена!
                        <br />
                        Наш менеджер свяжется с вами в течение 15 минут.
                        <br />
                        Пожалуйста, ожидайте!
                    </p>
                ) : <>
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
                                    <button
                                        className='btn btn-orange' type="button"
                                        onClick={() => setFeedbackReady(true)}
                                    >
                                        Заказать звонок
                                    </button>
                                </div>
                            </div>
                        </form>
                    </>
            }
        </Section>
    )
}

export default Feedback;