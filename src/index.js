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
// Страница заказа 
// Страница корзины
// Если неправильный пароль в модалке входа, то показать чет
// Слайдер в продукте из входящих в него компонентов
