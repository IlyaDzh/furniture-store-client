import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";

import { Sidebar, Header } from "admin/components";
import { Statistics, About, News, Comments, Orders } from "admin/modules";
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
                    <Route exact path="/admin/news" component={News} />
                    <Route exact path="/admin/comments" component={Comments} />
                    <Route exact path="/admin/orders" component={Orders} />
                </Switch>
            </div>

            <div className="overlay" onClick={() => setToggled(false)}></div>
        </div>
    );
};

export default Home;
