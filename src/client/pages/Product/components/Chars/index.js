import React from "react";
import PropTypes from "prop-types";

import "./Chars.scss";

const Chars = ({ type, chars: { shape, material, style, color, collection } }) => (
    <table className="chars-table">
        <tbody>
            <tr>
                <td>Форма:</td>
                <td>{shape || "---"}</td>
            </tr>
            <tr>
                <td>Материал:</td>
                <td>
                    {material[0] !== ""
                        ? material.map((item, index) => (index ? ", " : "") + item)
                        : "---"}
                </td>
            </tr>
            <tr>
                <td>Назначение:</td>
                <td>{type || "---"}</td>
            </tr>
            <tr>
                <td>Стиль:</td>
                <td>{style || "---"}</td>
            </tr>
            <tr>
                <td>Цвет:</td>
                <td>
                    {color[0] !== ""
                        ? color.map((item, index) => (index ? ", " : "") + item)
                        : "---"}
                </td>
            </tr>
            <tr>
                <td>Коллекция:</td>
                <td>{collection || "---"}</td>
            </tr>
        </tbody>
    </table>
);

Chars.propTypes = {
    chars: PropTypes.object
};

export default Chars;
