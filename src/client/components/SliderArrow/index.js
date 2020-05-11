import React from "react";
import classNames from "classnames";
import { IconContext } from "react-icons";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "./SliderArrow.scss";

const SliderArrow = ({ onClick, to }) => (
    <button
        type="button"
        onClick={onClick}
        className={classNames("btn-arrow", {
            "btn-arrow--prev": to === "prev",
            "btn-arrow--next": to === "next"
        })}
    >
        <IconContext.Provider value={{ className: "btn-arrow__icon" }}>
            {to === "prev" ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </IconContext.Provider>
    </button>
);

export default SliderArrow;
