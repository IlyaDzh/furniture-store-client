import React from 'react';
import BasePagination from 'rc-pagination';
import localeInfo from 'rc-pagination/es/locale/ru_RU.js';

import './Pagination.scss';

const Pagination = ({ onChange, total}) => (
    <BasePagination
        onChange={onChange}
        total={total * 10}
        locale={localeInfo}
    />
)

export default Pagination;