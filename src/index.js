import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "styles/index.scss";

import store from "store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);

// TODO:
// Сделать контейнеры из Cart и Comments
// Создать компонент Info в Product page
// Главную страницу каталога со всеми типами продуктов
// Слайдер в продукте из входящих в него компонентов
// Использовать формик
