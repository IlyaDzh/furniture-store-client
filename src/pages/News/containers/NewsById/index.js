import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { newsActions } from 'actions';

const NewsById = ({ fetchCurrentNews, item, setError, error, isLoading }) => {
    let { newsId } = useParams();

    useEffect(() => {
        if (item) {
            fetchCurrentNews(newsId);
        }
        return () => setError(false);
    }, [newsId]);

    return (
        <div className="">
            {
                isLoading ? <div className='spinner'><Spinner animation="border" variant="warning" /></div>
                    : error ? <div>Error</div>
                        : item && (
                            <>
                                {item.title}
                                {item.description}
                            </>
                        )
            }
        </div>
    )
}

export default connect(
    ({ news }) => ({
        item: news.currentItem,
        error: news.error,
        isLoading: news.isLoading
    }),
    newsActions
)(NewsById);