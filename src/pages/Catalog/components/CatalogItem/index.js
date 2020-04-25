import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./CatalogItem.scss";

const CatalogItem = ({ _id, image, title, size }) => (
    <Link
        to={`catalog/${_id}`}
        className={classNames("catalog-item", {
            "catalog-item--lg": size === "large",
            "catalog-item--sm": size === "small"
        })}
        style={{
            background: `url(${image}) center center / cover no-repeat rgb(231, 236, 237)`
        }}
    >
        <div className="background__overlay"></div>
        <div className="catalog-item__inner">
            <div className="item__title">{title}</div>
            <div className="item__plus">+</div>
        </div>
    </Link>
);

CatalogItem.propTypes = {
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.string
};

export default CatalogItem;
