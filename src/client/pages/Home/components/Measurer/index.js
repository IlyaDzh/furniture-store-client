import React, { useState } from "react";

import { Section } from "client/components";
import { ModalMeasurer } from "client/containers";
import measurerBg from "assets/home/measurer-bg.png";
import "./Measurer.scss";

const Measurer = () => {
    const [showMeasurer, setShowMeasurer] = useState(false);

    return (
        <>
            <Section
                className="measurer"
                style={{
                    background: `#e7eced url(${measurerBg}) no-repeat right top`,
                    backgroundSize: "contain"
                }}
            >
                <h3 className="measurer__title">
                    Хотите индивидуальный дизайн мебели?
                </h3>
                <h4 className="measurer__subtitle">
                    Отправим к вам лучшего дизайнера-замерщика!
                </h4>
                <button
                    className="btn btn-orange"
                    onClick={() => setShowMeasurer(true)}
                >
                    Вызвать замерщика
                </button>
            </Section>

            <ModalMeasurer show={showMeasurer} setShowMeasurer={setShowMeasurer} />
        </>
    );
};

export default Measurer;
