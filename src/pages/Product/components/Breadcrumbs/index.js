import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ _id, type, name }) => (
    <div className="breadcrumbs">
        <Link to="/catalog">Каталог</Link> >{" "}
        <Link to={`/catalog/${_id}`}>{type}</Link> > <span>{name}</span>
    </div>
);

Breadcrumbs.propTypes = {
    _id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string
};

export default Breadcrumbs;
