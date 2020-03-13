import React from 'react';

import { ScrollToTop, Pagination, Section, Comment } from 'components';
import './Comments.scss';

import allCommentsJSON from 'json/allComments.json';

const Comments = () => {
    return (
        <Section className='comments' title='Отзывы наших клиентов'>

            <ScrollToTop />

            <div className="row">
                {allCommentsJSON.length > 0 && (
                    allCommentsJSON.map(item => (
                        <Comment key={item.id} {...item} />
                    ))
                )}
            </div>

            <Pagination total='250' onChange={(page) => console.log(page)} />

        </Section>
    )
}

export default Comments;