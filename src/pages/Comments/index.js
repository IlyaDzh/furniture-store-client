import React from 'react';

import { Section, Comment } from 'components';
import './Comments.scss';

import allCommentsJSON from 'json/allComments.json';

const Comments = () => {
    return (
        <Section className='comments' title='Отзывы наших клиентов'>
            <div className="row">
                {allCommentsJSON.length > 0 && (
                    allCommentsJSON.map(item => (
                        <Comment key={item.id} {...item} />
                    ))
                )}
            </div>
        </Section>
    )
}

export default Comments;