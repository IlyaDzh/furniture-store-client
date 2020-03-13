import React from 'react';
import PropTypes from 'prop-types';
import BasePagination from 'rc-pagination';
import localeInfo from 'rc-pagination/es/locale/ru_RU.js';

import './Pagination.scss';

const Pagination = ({ onChange, total }) => (
    <BasePagination
        onChange={onChange}
        total={total}
        locale={localeInfo}
    />
)

Pagination.propTypes = {
    total: PropTypes.string,
    onChange: PropTypes.func
}

export default Pagination;