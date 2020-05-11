import React from "react";
import { Switch, Route } from "react-router-dom";

import { ScrollToTop, Section } from "components";
import { NewsByPage, NewsById, NewsSubs, NewsAside } from "./containers";

const News = () => (
    <Section className="news" title="Новости">
        <ScrollToTop />
        <Switch>
            <Route exact path={["/news", "/news/page/:pageNumber"]} component={NewsByPage} />
            <Route
                exact
                path="/news/:newsId"
                render={() => (
                    <div className="row">
                        <div className="col-lg-9">
                            <NewsById />
                        </div>
                        <div className="col-lg-3">
                            <NewsSubs />
                            <NewsAside />
                        </div>
                    </div>
                )}
            />
        </Switch>
    </Section>
);

export default News;
