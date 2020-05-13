import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

import { Section, Spinner, Error } from "client/components";
import { Breadcrumbs, Gallery, Price, Chars, PayDel } from "./components";
import { Cart, Comments } from "./containers";
import { productsActions } from "client/actions";
import "./Product.scss";

const Product = ({ fetchCurrentProduct, currentItem, error, isLoading }) => {
    const { productId } = useParams();

    useEffect(() => {
        if (currentItem && currentItem._id === productId) return;
        fetchCurrentProduct(productId);
    }, [productId]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section className="product" title="Каталог">
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <Error />
            ) : (
                currentItem && (
                    <>
                        <Breadcrumbs
                            path={currentItem.type.path}
                            type={currentItem.type.title}
                            name={currentItem.name}
                        />
                        <h4 className="product__name">{currentItem.name}</h4>
                        <div className="row">
                            <div className="col-lg-8">
                                <Gallery images={currentItem.images} />
                                <Tabs transition={false}>
                                    <Tab eventKey="chars" title="Характеристики">
                                        <Chars
                                            type={currentItem.type.title}
                                            chars={currentItem.chars}
                                        />
                                    </Tab>
                                    <Tab
                                        eventKey="pay-and-del"
                                        title="Доставка и оплата"
                                    >
                                        <PayDel />
                                    </Tab>
                                    <Tab eventKey="comments" title="Отзывы">
                                        <Comments />
                                    </Tab>
                                </Tabs>
                            </div>
                            <div className="col-lg-4">
                                <div className="price-wrapper">
                                    <Price price={currentItem.price} />
                                    <Cart />
                                </div>
                            </div>
                        </div>
                        {/* <div className="product-components">
                    <div className="product-components__title">В комплект входит</div>
                    <Slider items={components} />
                </div> */}
                    </>
                )
            )}
        </Section>
    );
};

export default connect(
    ({ products }) => ({
        currentItem: products.currentItem,
        error: products.error,
        isLoading: products.isLoading
    }),
    productsActions
)(Product);
