import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { homeActions } from 'actions';
import { Section, Comment } from 'components';

const LastNews = ({ fetchComments, comments }) => {
    useEffect(() => {
        if (!comments.length) {
            fetchComments();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments]);

    return (
        <Section title='Отзывы наших клиентов' viewAll='Еще отзывы' viewAllUrl='/comments' >
            <div className="row">
                {comments.length > 0 && (
                    comments.map(item => (
                        <Comment key={item._id} {...item} />
                    ))
                )}
            </div>
        </Section>
    )
}

export default connect(
    ({ home }) => ({
        comments: home.comments
    }),
    homeActions
)(LastNews);