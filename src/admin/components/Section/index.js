import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Section.scss";

const Section = ({ className, title, children }) => (
    <section className={classNames("content-section", className)}>
        <h2 className="content-section__title">{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Section;
