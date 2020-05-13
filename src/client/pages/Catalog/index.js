import React from "react";
import { Switch, Route } from "react-router-dom";

import { Section } from "client/components";
import { CatalogAll } from "./components";
import { Menu, CatalogByPath } from "./containers";

const Catalog = () => (
    <Section className="catalog" title="Каталог">
        <Switch>
            <Route exact path="/catalog" component={CatalogAll} />
            <Route
                exact
                path="/catalog/:path"
                render={() => (
                    <div className="row">
                        <div className="col-sm-5 col-md-4 col-xl-3">
                            <Menu />
                        </div>
                        <div className="col-sm-7 col-md-8 col-xl-9">
                            <CatalogByPath />
                        </div>
                    </div>
                )}
            />
        </Switch>
    </Section>
);

export default Catalog;
