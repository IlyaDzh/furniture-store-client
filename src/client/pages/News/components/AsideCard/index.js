import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { baseUrl } from "utils/constants";
import "./AsideCard.scss";

const AsideCard = ({ _id, image, title }) => {
    return (
        <div className="aside-card">
            <Link to={`/news/${_id}`} className="aside-card__image">
                <img src={`${baseUrl}/${image}`} alt="" />
            </Link>
            <h5 className="aside-card__title">{title}</h5>
            <Link to={`/news/${_id}`} className="aside-card__link">
                Читать далее
            </Link>
        </div>
    );
};

AsideCard.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string
};

export default AsideCard;
