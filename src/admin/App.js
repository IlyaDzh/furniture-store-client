import React from "react";
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
                    "/admin/news",
                    "/admin/comments",
                    "/admin/contacts"
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

App.defaultProps = {
    isAuth: true
};

export default App;
