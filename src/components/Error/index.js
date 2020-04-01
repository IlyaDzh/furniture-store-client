import React from "react";

import errorImage from "assets/error-smile.png";
import "./Error.scss";

const Error = () => (
    <section className="not-found">
        <div className="not-found__inner">
            <div className="not-found__code">
                <h1>
                    4<span style={{ backgroundImage: `url(${errorImage})` }}></span>4
                </h1>
            </div>
            <h2>Oops! Страница не найдена</h2>
            <p>
                Извините, но страница, которую вы ищете, не существует, удалена или временно
                недоступна
            </p>
            <button
                className="btn btn-orange"
                type="button"
                onClick={() => console.log("click")}
            >
                Вернуться на главную страницу
            </button>
        </div>
    </section>
);

export default Error;
