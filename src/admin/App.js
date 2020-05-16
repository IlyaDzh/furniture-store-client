import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { Auth, Home } from "./pages";

const App = ({ isAuth }) => (
    <div className="admin-wrapper">
        <Switch>
            <Route
                exact
                path="/admin/signin"
                render={() => (isAuth ? <Redirect to="/admin" /> : <Auth />)}
            />
            <Route
                exact
                path={[
                    "/admin",
                    "/admin/statistics",
                    "/admin/about",
                    "/admin/catalog",
                    "/admin/news",
                    "/admin/comments",
                    "/admin/orders"
                ]}
                render={() => (isAuth ? <Home /> : <Redirect to="/admin/signin" />)}
            />
            <Route
                render={() =>
                    isAuth ? <div>Ошибка</div> : <Redirect to="/admin/signin" />
                }
            />
        </Switch>
    </div>
);

export default connect(({ admin }) => ({ isAuth: admin.isAuth }), null)(App);
