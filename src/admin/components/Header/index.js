import React from "react";
import PropTypes from "prop-types";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "react-bootstrap";

import "./Header.scss";

const Header = ({ onClick }) => (
    <div className="admin-header">
        <Button variant="toggle" onClick={onClick}>
            <AiOutlineMenu />
        </Button>
        <Button className="btn-logout" variant="danger">
            Выход
        </Button>
    </div>
);

Header.propTypes = {
    onClick: PropTypes.func
};

export default Header;
