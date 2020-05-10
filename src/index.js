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
// Добавление товара с его страницы
// Добавление комментариев пользователей
// Слайдер входящих в набор продуктов
// Поиск товаров в каталоге
// Ошибки при добавлении одного и того же товара?
// Страница просмотра заказа?
// Админка
