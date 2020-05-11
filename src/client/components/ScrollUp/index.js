import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import classNames from "classnames";

import "./ScrollUp.scss";

const ScrollUp = () => {
    const [height, setHeight] = useState();

    useEffect(() => {
        const handleSetHeight = () => {
            setHeight(window.pageYOffset);
        };
        window.addEventListener("scroll", handleSetHeight);
        return () => window.removeEventListener("scroll", handleSetHeight);
    });

    return (
        <button
            className={classNames("scrollup", { "scrollup--show": height > 650 })}
            onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
        >
            <FaRegArrowAltCircleUp />
        </button>
    );
};

export default ScrollUp;
