import React from "react";
import { Switch, Route } from "react-router-dom";

import { ScrollToTop, Section } from "components";
// import { CatalogAll } from "./components";
import { CatalogAll, CatalogById } from "./containers";

const Catalog = () => (
    <Section className="catalog" title="Каталог">
        <ScrollToTop />
        <Switch>
            <Route exact path="/catalog" component={CatalogAll} />
            <Route exact path="/catalog/:catalogId" component={CatalogById} />
        </Switch>
    </Section>
);

export default Catalog;
