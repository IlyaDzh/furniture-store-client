import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card as BaseCard } from 'react-bootstrap';

import './CardNews.scss';

const CardNews = ({ id, image, title, description, date }) => (
    <div className='card-displaying col-lg-4 col-md-6 col-sm-6 mb-4'>
        <BaseCard className='card-news'>
            <Link to={`news/${id}`}>
                <BaseCard.Img variant="top" src={require(`assets/image/${image}`)} />
            </Link>
            <BaseCard.Body>
                <Link to={`news/${id}`}>
                    <BaseCard.Title>{title}</BaseCard.Title>
                </Link>
                <BaseCard.Text>
                    {description}
                </BaseCard.Text>
                <div className="card-bottom">
                    <span>{date}</span>
                    <Link to={`news/${id}`} className='card-bottom__link'>Читать далее</Link>
                </div>
            </BaseCard.Body>
        </BaseCard>
    </div>
)

CardNews.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string
}

export default CardNews;