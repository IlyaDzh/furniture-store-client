import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";

import { Sidebar, Header } from "admin/components";
import { Statistics, About } from "admin/modules";

import "./Home.scss";

const Home = () => {
    const [toggled, setToggled] = useState(false);

    return (
        <div className={classNames("admin-home", { toggled: toggled })}>
            <Sidebar />
            <Header onClick={() => setToggled(!toggled)} />

            <div className="content-wrapper">
                <Switch>
                    <Route
                        exact
                        path={["/admin", "/admin/statistics"]}
                        component={Statistics}
                    />
                    <Route exact path="/admin/about" component={About} />
                </Switch>
            </div>

            <div className="overlay" onClick={() => setToggled(false)}></div>
        </div>
    );
};

export default Home;
