import React from "react";
import PropTypes from "prop-types";

import { getConvertTime } from "utils/helpers";
import "./FullNews.scss";

const FullNews = ({ image, title, description, date }) => {
    return (
        <div className="full-news">
            <h5 className="full-news__title">{title}</h5>
            <div className="full-news__image">
                <img src={image} alt="" />
            </div>
            <div className="full-news__date">{date && getConvertTime(date)}</div>
            {description &&
                description.map(item => {
                    if (item.type === "Image") {
                        return (
                            <div className="full-news__image" key={item._id}>
                                <img src={item.content} alt="" />
                            </div>
                        );
                    }
                    return <p key={item._id}>{item.content}</p>;
                })}
        </div>
    );
};

FullNews.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.array,
    date: PropTypes.string
};

export default FullNews;
