import React, { useState } from 'react';

import { Section, Modal } from 'components';
import designBg from 'assets/home/design/bg.png';
import './Design.scss';

const Design = () => {
    const [showIndividual, setShowIndividual] = useState(false);

    return (
        <>
            <Section
                className='design'
                style={{ background: `#e7eced url(${designBg}) no-repeat right top`, backgroundSize: 'contain' }}
            >
                <h3 className='design__title'>Хотите индивидуальный дизайн мебели?</h3>
                <h4 className='design__subtitle'>Отправим к вам лучшего дизайнера-замерщика!</h4>
                <button className='btn btn-orange' onClick={() => setShowIndividual(true)}>Вызвать замерщика</button>
            </Section>

            <Modal show={showIndividual} onHide={() => setShowIndividual(false)}>
                Форма заказа замерщика
            </Modal>
        </>
    )
}

export default Design;