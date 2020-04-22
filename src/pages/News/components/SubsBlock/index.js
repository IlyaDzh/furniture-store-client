import React from "react";
import PropTypes from "prop-types";

import "./SubsBlock.scss";

const SubsBlock = ({ subsRef, onClick, ready }) => (
    <div className="news-subs">
        <h5>Узнайте первыми о наших новостях и акциях!</h5>
        {!ready ? (
            <form>
                <input
                    ref={subsRef}
                    className="form-control news-subs__input"
                    placeholder="Введите ваш E-mail"
                />
                <button className="btn btn-orange" type="button" onClick={onClick}>
                    Подписаться
                </button>
            </form>
        ) : (
            <div className="news-subs--result">
                Вы успешно подписались на рассылку!
            </div>
        )}
    </div>
);

SubsBlock.propTypes = {
    subsRef: PropTypes.object,
    onClick: PropTypes.func,
    ready: PropTypes.bool
};

export default SubsBlock;
