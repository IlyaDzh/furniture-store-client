import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import { commentsActions } from 'actions';
import { ScrollToTop, Pagination, Section, Comment } from 'components';
import './Comments.scss';

const Comments = ({ fetchComments, setCurrentPage, items, currentPage, totalPage, setError, error, isLoading }) => {
    let history = useHistory();
    let { pageUrl } = useParams();

    useEffect(() => {
        if (pageUrl) {
            fetchComments(pageUrl);
        } else {
            fetchComments(1);
        }
        return () => setError(false);
    }, [pageUrl]);

    const changePage = page => {
        setCurrentPage(page);
        history.push('/comments/page/' + page);
    }

    return (
        <Section className='comments' title='Отзывы наших клиентов'>

            <ScrollToTop />

            <div className="row">
                {
                    isLoading ? <div className='spinner'><Spinner animation="border" variant="warning" /></div>
                        : error ? <div>Error</div>
                            : items.length > 0 && items.map(item => (
                                <Comment key={item.id} {...item} />
                            ))
                }
            </div>

            <Pagination total={totalPage} current={currentPage} onChange={changePage} />

        </Section>
    )
}

export default connect(
    ({ comments }) => ({
        items: comments.items,
        currentPage: comments.currentPage,
        totalPage: comments.totalPage,
        error: comments.error,
        isLoading: comments.isLoading
    }),
    commentsActions
)(Comments);