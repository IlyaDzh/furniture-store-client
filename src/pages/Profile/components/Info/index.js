import React from "react";
import PropTypes from "prop-types";

import "./Info.scss";

const Info = ({ data: { fullname, email, phone, address } }) => (
    <div className="profile-info">
        <div className="profile-info__title">Личные данные</div>
        <div className="profile-info__content">
            <table>
                <tbody>
                    <tr>
                        <td>ФИО:</td>
                        <td>{fullname}</td>
                    </tr>
                    <tr>
                        <td>E-mail:</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Телефон:</td>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <td>Адрес доставки:</td>
                        <td>{address || "---"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

Info.propTypes = {
    fullname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string
};

export default Info;
