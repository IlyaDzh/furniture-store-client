import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./AsideCard.scss";

const AsideCard = ({ _id, image, title }) => {
    return (
        <div className="aside-card">
            <Link to={`/news/${_id}`} className="aside-card__image">
                <img src={image} alt="" />
            </Link>
            <h5 className="aside-card__title">{title}</h5>
            <Link to={`/news/${_id}`} className="aside-card__link">
                Читать далее
            </Link>
        </div>
    );
};

AsideCard.defaultProps = {
    _id: "5e8227b79c9b3418647db089",
    image: "https://source.unsplash.com/featured/?sofa/9",
    title: "Тест боковая панель"
};

AsideCard.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string
};

export default AsideCard;
