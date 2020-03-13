import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { commentsActions } from 'actions';
import { ScrollToTop, Pagination, Section, Comment } from 'components';
import './Comments.scss';

const Comments = ({ fetchComments, setCurrentPage, items, currentPage, totalPage, isLoading }) => {
    useEffect(() => {
        fetchComments(currentPage);
        return () => console.log("UNMOUNT")
    }, [currentPage]);

    const changePage = page => {
        setCurrentPage(page);
        window.scroll({ top: 275, left: 0, behavior: 'smooth' })
    }

    return (
        <Section className='comments' title='Отзывы наших клиентов'>

            <ScrollToTop />

            <div className="row">
                {
                    isLoading ? (
                        <div className='spinner'>
                            <Spinner animation="border" variant="warning" />
                        </div>
                    ) :
                        items.length > 0 && (
                            items.map(item => (
                                <Comment key={item.id} {...item} />
                            ))
                        )
                }
            </div>

            <Pagination total={totalPage} onChange={changePage} />

        </Section>
    )
}

export default connect(
    ({ comments }) => ({
        items: comments.items,
        currentPage: comments.currentPage,
        totalPage: comments.totalPage,
        isLoading: comments.isLoading
    }),
    commentsActions
)(Comments);