import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import AppClient from "./client";
import AppAdmin from "./admin";

import "./styles/index.scss";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/admin" component={AppAdmin} />
            <Route path="/" component={AppClient} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
