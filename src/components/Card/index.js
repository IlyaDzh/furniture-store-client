import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import { Card as BaseCard, Button } from 'react-bootstrap';

import './Card.scss';

const Card = ({ image, title, price, oldPrice }) => {
    return (
        <BaseCard>
            <BaseCard.Img variant="top" src={require(`assets/image/${image}`)} />
            <BaseCard.Body>
                <BaseCard.Title>{title}</BaseCard.Title>
                <BaseCard.Text>
                    {price} руб.
                    <span>{oldPrice} руб.</span>
                </BaseCard.Text>
                <Button className='card-btn btn-orange'>
                    <FaShoppingCart style={{ fontSize: '18', marginRight: '5' }} />
                    В корзину
                </Button>
            </BaseCard.Body>
        </BaseCard>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    oldPrice: PropTypes.string
}

export default Card;