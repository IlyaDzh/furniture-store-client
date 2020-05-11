import React from "react";
import PropTypes from "prop-types";

import { getConvertTime } from "utils/helpers";
import "./Comment.scss";

const Comment = ({ fullname, comment, date }) => (
    <div className="comment-displaying col-lg-4 col-md-6 col-sm-6 mb-5">
        <div className="comment">
            <p className="comment__text">{comment}</p>
            <div className="comment-bottom">
                <div className="comment-bottom__inner">
                    <h5 className="comment__name">{fullname}</h5>
                    <p className="comment__date">{getConvertTime(date)}</p>
                </div>
            </div>
        </div>
    </div>
);

Comment.propTypes = {
    fullname: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default Comment;
