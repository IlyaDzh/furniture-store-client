import React from "react";
import PropTypes from "prop-types";

import { baseUrl } from "utils/constants";
import { getConvertTime } from "utils/helpers";
import "./FullNews.scss";

const FullNews = ({ image, title, description, date }) => (
    <div className="full-news">
        <h4 className="full-news__title">{title}</h4>
        <div className="full-news__image">
            <img src={`${baseUrl}/${image}`} alt="" />
        </div>
        <div className="full-news__date">{date && getConvertTime(date)}</div>
        <p>{description}</p>
    </div>
);

FullNews.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string
};

export default FullNews;
