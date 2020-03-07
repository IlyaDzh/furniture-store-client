import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ className, style, title, children }) => (
    <section className={classNames('section', className)} style={{ ...style }}>
        <div className="container">
            {title && <div className="section__title">{title}</div>}
            <div className="section__content">{children}</div>
        </div>
    </section>
)

Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Section;