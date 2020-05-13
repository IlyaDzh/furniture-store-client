import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Header, ScrollToTop, ScrollUp, Footer, Error } from "./components";
import { Navbar, MiniCart } from "./containers";
import {
    Profile,
    Home,
    Catalog,
    Product,
    Cart,
    Order,
    AboutUs,
    PaymentDelivery,
    News,
    Comments,
    Contacts,
    PrivacyPolicy
} from "./pages";

const App = () => (
    <div className="client-wrapper">
        <Navbar />
        <Header />
        <ScrollToTop />
        <ToastContainer
            className="my-toast__container"
            toastClassName="my-toast"
            position="top-right"
            autoClose={3000}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
        />
        <MiniCart />

        <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route exact path="/order/:orderId" component={Order} />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/cart" component={Cart} />
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

export default App;
