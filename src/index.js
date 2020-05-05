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
// Доделать отправку заказа на бек (+ метод в контроллере для сохранения списка заказов юзера)
// Начать каталог на беке и корзину юзера
// Админка?
