import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LoginForm } from "modules";

const App = ({ isAuth }) => (
    <div className="admin-wrapper">
        <Switch>
            <Route exact path="/admin/signin" render={() => <LoginForm />} />
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
