import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";

const Card = ({ title, number }) => (
    <div className="col-sm-6 col-md-3">
        <div className="card-stats">
            <div className="card-stats__title">{title}:</div>
            <div className="card-stats__number">{number}</div>
        </div>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
};

export default Card;
