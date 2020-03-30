import React from "react";
import PropTypes from "prop-types";

import { getConvertTime } from "utils/helpers";
import "./Comment.scss";

const Comment = ({ name, image, text, date }) => (
    <div className="comment-displaying col-lg-4 col-md-6 col-sm-6 mb-5">
        <div className="comment">
            <p className="comment__text">{text}</p>
            <div className="comment-bottom">
                <div className="comment-bottom__inner">
                    <h5 className="comment__name">{name}</h5>
                    <p className="comment__date">{getConvertTime(date)}</p>
                </div>
                <div className="comment__avatar">
                    <img src={image} alt="Аватар" />
                </div>
            </div>
        </div>
    </div>
);

Comment.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string
};

export default Comment;
