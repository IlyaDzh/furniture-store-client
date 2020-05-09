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
// Оформление заказа (если авторизовано, то пушить в редакс, иначе онли запрос) 
// Очищение корзины после успешного оформления
// Добавление комментариев пользователей
// Слайдер входящих в набор продуктов
// Поиск товаров в каталоге
// Страница просмотра заказа?
// Админка
