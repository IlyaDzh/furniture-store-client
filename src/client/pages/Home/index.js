import React from "react";

import {
    PopularProducts,
    NewProducts,
    LastNews,
    LastComments,
    OrderCall
} from "./containers";
import { Carousel, Advantages, Measurer } from "./components";

const Home = () => (
    <section className="home">
        <Carousel />
        <PopularProducts />
        <NewProducts />
        <Advantages />
        <LastNews />
        <Measurer />
        <LastComments />
        <OrderCall />
    </section>
);

export default Home;
