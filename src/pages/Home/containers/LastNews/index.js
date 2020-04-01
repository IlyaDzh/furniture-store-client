import React, { useEffect } from "react";
import { connect } from "react-redux";

import { newsActions } from "actions";
import { Section, CardNews } from "components";

const LastNews = ({ fetchLastNews, news }) => {
    useEffect(() => {
        if (!news.length) {
            fetchLastNews();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [news]);

    return (
        <Section title="Последние новости" viewAll="Больше новостей" viewAllUrl="/news">
            <div className="row">
                {news.length > 0 && news.map(item => <CardNews key={item._id} {...item} />)}
            </div>
        </Section>
    );
};

export default connect(
    ({ news }) => ({
        news: news.lastItems
    }),
    newsActions
)(LastNews);
