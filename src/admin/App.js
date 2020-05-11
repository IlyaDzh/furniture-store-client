import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const App = ({ isAuth }) => (
    <div className="wrapper">
        <Switch>
            <Route
                exact
                path="/admin/signin"
                render={() => <div>Вход в админку</div>}
            />
            <Route
                exact
                path={[
                    "/admin",
                    "/admin/about",
                    "/admin/news",
                    "/admin/comments",
                    "/admin/contacts"
                ]}
                render={() =>
                    isAuth ? <div>Home</div> : <Redirect to="/admin/signin" />
                }
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
    isAuth: false
};

export default App;
