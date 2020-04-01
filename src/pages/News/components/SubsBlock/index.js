import React from "react";

import "./SubsBlock.scss";

const SubsBlock = ({ onClick, ready, result }) => {
    return (
        <div className="news-subs">
            <h5>Узнайте первыми о наших новостях и акциях!</h5>
            {!ready ? (
                <form>
                    <input
                        className="form-control news-subs__input"
                        placeholder="Введите ваш E-mail"
                    />
                    <button className="btn btn-orange" type="button" onClick={onClick}>
                        Подписаться
                    </button>
                </form>
            ) : (
                <div className="news-subs--result">{result}</div>
            )}
        </div>
    );
};

export default SubsBlock;
