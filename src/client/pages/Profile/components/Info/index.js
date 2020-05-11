import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import { ModalEdit } from "containers";
import "./Info.scss";

const Info = ({ data: { fullname, email, phone, address } }) => {
    const [showEdit, setShowEdit] = useState(false);

    return (
        <div className="profile-info">
            <div className="profile-info__title">Личные данные</div>
            <div className="profile-info__content">
                <table>
                    <tbody>
                        <tr>
                            <td>ФИО:</td>
                            <td>{fullname || "---"}</td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Телефон:</td>
                            <td>{phone || "---"}</td>
                        </tr>
                        <tr>
                            <td>Адрес доставки:</td>
                            <td>{address || "---"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="profile-info__edit">
                <Button variant="orange" onClick={() => setShowEdit(true)}>
                    Редактировать
                </Button>
            </div>
            <ModalEdit
                show={showEdit}
                setShowEdit={setShowEdit}
                onHide={() => setShowEdit(false)}
            />
        </div>
    );
};

Info.propTypes = {
    fullname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string
};

export default Info;
