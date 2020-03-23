import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { homeActions } from 'actions';
import { Section, CardNews } from 'components';

const LastNews = ({ fetchNews, news }) => {
    useEffect(() => {
        if (!news.length) {
            fetchNews();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [news]);

    return (
        <Section title='Последние новости' viewAll='Больше новостей' viewAllUrl='/news'>
            <div className="row">
                {news.length > 0 && (
                    news.map(item => (
                        <CardNews key={item.id} {...item} />
                    ))
                )}
            </div>
        </Section>
    )
}

export default connect(
    ({ home }) => ({
        news: home.news
    }),
    homeActions
)(LastNews);