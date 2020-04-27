import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import { ScrollToTop, Section } from "components";
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
            <div>
                Тут вроде должен быть слайдер из входящих в продукт компонентов
                (стулья, столы и т.д.)
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
    components: []
};

export default Product;
