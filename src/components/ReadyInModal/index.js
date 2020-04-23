import React from "react";

import successImage from "assets/success.png";
import "./ReadyInModal.scss";

const ReadyInModal = ({ title = "Спасибо! Ваша заявка отправлена!" }) => (
    <div className="modal-ready">
        <div className="modal-ready__content">
            <div className="modal-ready__content__img">
                <img src={successImage} alt="Success" />
            </div>
            <p>{title}</p>
        </div>
    </div>
);

export default ReadyInModal;
