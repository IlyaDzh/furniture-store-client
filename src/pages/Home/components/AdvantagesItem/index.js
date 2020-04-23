import React from "react";
import PropTypes from "prop-types";

import "./AdvantagesItem.scss";

const AdvantagesItem = ({ image, description }) => (
    <div className="advantages-item col-xs-6 col-sm-4 col-lg-2">
        <div className="advantages-item__image">
            <img src={require(`assets/${image}`)} alt="Advantages" />
        </div>
        <div className="advantages-item__desc">{description}</div>
    </div>
);

AdvantagesItem.propTypes = {
    image: PropTypes.string,
    description: PropTypes.string
};

export default AdvantagesItem;
