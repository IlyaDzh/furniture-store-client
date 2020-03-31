import React from "react";

import { AsideCard } from "../../components";
import "./NewsAside.scss";

const NewsAside = () => {
    return (
        <div className="news-aside">
            <p>Вам может быть интересно:</p>
            <AsideCard />
            <AsideCard />
        </div>
    );
};

export default NewsAside;
