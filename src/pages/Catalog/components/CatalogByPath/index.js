import React from "react";
import PropTypes from "prop-types";

import { CardProduct } from "components";
import "./CatalogByPath.scss";

const CatalogByPath = ({ fetchAddToCart, currentItem: { title, products } }) => (
    <div className="catalog-content">
        <h4 className="catalog-content__title">{title}</h4>
        <div className="row">
            {products.map(item => (
                <div
                    key={item._id}
                    className="card-wrapper col-sm-12 col-md-6 col-lg-4 col-xl-3"
                >
                    <CardProduct addToCart={fetchAddToCart} {...item} />
                </div>
            ))}
        </div>
    </div>
);

CatalogByPath.propTypes = {
    title: PropTypes.string,
    products: PropTypes.arrayOf(Object)
};

export default CatalogByPath;
