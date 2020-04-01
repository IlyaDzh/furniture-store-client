import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header, ScrollUp, Footer, Error } from "components";
import {
    Home,
    Catalog,
    AboutUs,
    PaymentDelivery,
    News,
    Comments,
    Contacts,
    PrivacyPolicy
} from "pages";

const App = () => {
    return (
        <div className="wrapper">
            <Header />

            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path={["/catalog", "/catalog/:catalogId"]} component={Catalog} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/payment-and-delivery" component={PaymentDelivery} />
                <Route path="/news" component={News} />
                <Route
                    exact
                    path={["/comments", "/comments/page/:pageNumber"]}
                    component={Comments}
                />
                <Route path="/contacts" component={Contacts} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route component={Error} />
            </Switch>

            <ScrollUp />
            <Footer />
        </div>
    );
};

export default App;
