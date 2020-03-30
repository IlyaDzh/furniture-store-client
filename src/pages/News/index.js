import React from "react";
import { Switch, Route } from "react-router-dom";

import { ScrollToTop, Section } from "components";
import { NewsByPage, NewsById } from "./containers";

const News = () => (
    <Section className="news" title="Новости">
        <ScrollToTop />
        <Switch>
            <Route exact path={["/news", "/news/page/:pageNumber"]} component={NewsByPage} />
            <Route exact path="/news/:newsId" component={NewsById} />
        </Switch>
    </Section>
);

export default News;
