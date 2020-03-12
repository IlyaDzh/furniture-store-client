import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ className, style, title, children, viewAll, viewAllUrl, viewAllIcon }) => (
    <section className={classNames('section', className)} style={{ ...style }}>
        <div className="container">
            {title && <div className="section__title">{title}</div>}
            <div className="section__content">{children}</div>
            {viewAll && viewAllUrl &&
                <div className="section-view">
                    <Link
                        to={viewAllUrl}
                        className={classNames('btn section-view__btn', { 'section-view__btn--icon': !viewAll })}
                    >
                        {viewAll}
                        {viewAllIcon || <IoIosArrowRoundForward />}
                    </Link>
                </div>
            }
        </div>
    </section>
)

Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    viewAll: PropTypes.string,
    viewAllUrl: PropTypes.string,
    viewAllIcon: PropTypes.node
}

export default Section;