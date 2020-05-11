import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppClient from "./client";
import AppAdmin from "./admin";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/admin" component={AppAdmin} />
            <Route path="/" component={AppClient} />
        </Switch>
    </Router>,
    document.getElementById("root")
);

// TODO:
// Слайдер входящих в набор продуктов
// Поиск товаров в каталоге
// Картинки
// Админка
