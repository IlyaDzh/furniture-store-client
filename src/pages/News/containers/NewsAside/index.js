import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { newsActions } from "actions";
import { AsideCard } from "../../components";
import "./NewsAside.scss";

const NewsAside = ({ fetchLastNews, news }) => {
    let { newsId } = useParams();

    useEffect(() => {
        if (!news.length) {
            fetchLastNews();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [news]);

    return (
        <div className="news-aside">
            <p>Вам может быть интересно:</p>
            {news.length > 0 &&
                news.map(item => item._id !== newsId && <AsideCard key={item._id} {...item} />)}
        </div>
    );
};

export default connect(
    ({ news }) => ({
        news: news.lastItems
    }),
    newsActions
)(NewsAside);
