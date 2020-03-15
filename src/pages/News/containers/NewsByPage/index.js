import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import { newsActions } from 'actions';
import { Pagination, CardNews } from 'components';

const NewsByPage = ({ fetchNews, setCurrentPage, items, currentPage, totalPage, setError, error, isLoading }) => {
    let history = useHistory();
    let { pageUrl } = useParams();

    useEffect(() => {
        if (pageUrl) {
            fetchNews(pageUrl);
        } else {
            fetchNews(1);
        }
        return () => setError(false);
    }, [pageUrl]);

    const changePage = page => {
        setCurrentPage(page);
        history.push('/news/page/' + page);
    }

    return (
        <>
            <div className="row">
                {
                    isLoading ? <div className='spinner'><Spinner animation="border" variant="warning" /></div>
                        : error ? <div>Error</div>
                            : items.length > 0 && items.map(item => (
                                <CardNews key={item.id} {...item} />
                            ))
                }
            </div>

            <Pagination total={totalPage} current={currentPage} onChange={changePage} />
        </>
    )
}

export default connect(
    ({ news }) => ({
        items: news.items,
        currentPage: news.currentPage,
        totalPage: news.totalPage,
        error: news.error,
        isLoading: news.isLoading
    }),
    newsActions
)(NewsByPage);