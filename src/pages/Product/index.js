import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import { ScrollToTop, Section } from "components";
import { Breadcrumbs, Gallery, Cart, Chars, PayDel, Comments } from "./components";
import "./Product.scss";

const Product = ({
    _id,
    type,
    name,
    images,
    chars,
    price,
    discount,
    components
}) => (
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
                    <div className="product-price">
                        <div className="product-price__old">{price.old} руб.</div>
                        <div className="product-price__current">
                            {price.current}{" "}
                            <span className="product-price__current-measure">
                                руб / шт
                            </span>
                        </div>
                    </div>
                    <div className="product-discount">
                        <div className="product-discount__percent">
                            -{discount.percent}%
                        </div>
                        <div className="product-discount__value">
                            Вы экономите: <span>{discount.value}</span> руб.
                        </div>
                    </div>
                    <div className="product-cart">
                        <Cart _id={_id} />
                    </div>
                </div>
            </div>
        </div>
        <div>
            Тут вроде должен быть слайдер из входящих в продукт компонентов (стулья,
            столы и т.д.)
        </div>
    </Section>
);

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
        current: "65 688",
        old: "77 280"
    },
    discount: {
        value: "11 592",
        percent: "15%"
    },
    components: []
};

export default Product;
