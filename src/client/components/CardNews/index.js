import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card as BaseCard } from "react-bootstrap";

import { baseUrl } from "utils/constants";
import { getConvertTime } from "utils/helpers";
import "./CardNews.scss";

const CardNews = ({ _id, image, title, short_description, date }) => (
    <div className="card-displaying col-lg-4 col-md-6 col-sm-6 mb-4">
        <BaseCard className="card-news">
            <Link to={`/news/${_id}`}>
                <BaseCard.Img variant="top" src={`${baseUrl}/${image}`} />
            </Link>
            <BaseCard.Body>
                <BaseCard.Title>{title}</BaseCard.Title>
                <BaseCard.Text>{short_description}</BaseCard.Text>
                <div className="card-bottom">
                    <span>{getConvertTime(date)}</span>
                    <Link to={`/news/${_id}`} className="card-bottom__link">
                        Читать далее
                    </Link>
                </div>
            </BaseCard.Body>
        </BaseCard>
    </div>
);

CardNews.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    short_description: PropTypes.string,
    date: PropTypes.string
};

export default CardNews;
