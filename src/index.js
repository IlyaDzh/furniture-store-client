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
// Заглушки когда пользователь не авторизован
// Удалить ошибки на беке при запросах не авторизованного юзера?
// Очищать поле в модалке входа после отправки
// Админка?
