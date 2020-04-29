import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import { ScrollToTop, Section, Slider } from "components";
import { Breadcrumbs, Gallery, Price, Chars, PayDel } from "./components";
import { Cart, Comments } from "./containers";
import "./Product.scss";

const Product = ({ _id, type, name, images, chars, price, components }) => {
    return (
        <Section className="product" title="Каталог">
            <ScrollToTop />
            <Breadcrumbs _id={_id} type={type} name={name} />
            <h4 className="product__name">{name}</h4>
            <div className="row">
                <div className="col-lg-8">
                    <Gallery images={images} />
                    <Tabs transition={false}>
                        <Tab eventKey="chars" title="Характеристики">
                            <Chars chars={chars} />
                        </Tab>
                        <Tab eventKey="pay-and-del" title="Доставка и оплата">
                            <PayDel />
                        </Tab>
                        <Tab eventKey="comments" title="Отзывы">
                            <Comments />
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-lg-4">
                    <div className="price-wrapper">
                        <Price price={price} />
                        <Cart />
                    </div>
                </div>
            </div>
            <div className="product-components">
                <div className="product-components__title">В комплект входит</div>
                <Slider items={components} />
            </div>
        </Section>
    );
};

Product.defaultProps = {
    _id: "156",
    type: "Мебель для спальни",
    name: "Спальня Аделаида с 5-дверным шкафом (орех фарина)",
    images: [],
    chars: {
        shape: "Прямые",
        material: "МДФ",
        type: "Мебель для спальни",
        style: "Барокко",
        color: "Орех",
        collection: "Аделаида"
    },
    price: {
        current: "65688",
        old: "77280",
        discount: "11592",
        percent: "15"
    },
    components: [
        {
            id: 1,
            image: "home/popular/2.jpg",
            title: "Гостиная Джоконда (крем)",
            price: "18 000",
            oldPrice: "72 440"
        },
        {
            id: 2,
            image: "home/popular/8.jpg",
            title: "Малая гостиная Матильда",
            price: "186 700",
            oldPrice: "226 400"
        },
        {
            id: 3,
            image: "home/popular/3.jpg",
            title: "Спальня Элиза Люкс c 5дверным шкафом (крем)",
            price: "59 800",
            oldPrice: "139 500"
        },
        {
            id: 4,
            image: "home/popular/12.jpg",
            title: "Модульная система для спальни Тиффани (штрих /золото)",
            price: "95 500",
            oldPrice: "173 000"
        },
        {
            id: 5,
            image: "home/popular/1.jpg",
            title: "Гостиная Джоконда (крем)",
            price: "18 000",
            oldPrice: "72 440"
        },
        {
            id: 6,
            image: "home/popular/7.jpg",
            title: "Малая гостиная Матильда",
            price: "186 700",
            oldPrice: "226 400"
        }
    ]
};

export default Product;
