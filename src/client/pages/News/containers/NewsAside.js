import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { newsActions } from "client/actions";
import { AsideCard } from "../components";

const NewsAside = ({ fetchLastNews, news }) => {
    const { newsId } = useParams();

    useEffect(() => {
        if (!news.length) {
            fetchLastNews();
        }
    }, [news]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="news-aside">
            <h5
                style={{
                    marginBottom: "15",
                    paddingBottom: "14",
                    borderBottom: "1px solid #d6d6d6"
                }}
            >
                Вам может быть интересно:
            </h5>
            {news.length > 0 &&
                news.map(
                    item =>
                        item._id !== newsId && <AsideCard key={item._id} {...item} />
                )}
        </div>
    );
};

export default connect(
    ({ news }) => ({
        news: news.lastItems
    }),
    newsActions
)(NewsAside);
