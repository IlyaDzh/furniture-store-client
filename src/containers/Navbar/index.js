import React, { useState } from "react";
import { connect } from "react-redux";

import { Navbar as BaseNavbar } from "components";
import { ModalLogin, ModalRegister } from "containers";
import { userActions } from "actions";

const Navbar = ({ isAuth }) => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleClickLogin = () => {
        setShowLogin(true);
    };

    const handleClickReg = () => {
        setShowRegister(true);
    };

    return (
        <>
            <BaseNavbar
                isAuth={isAuth}
                handleClickLogin={handleClickLogin}
                handleClickReg={handleClickReg}
            />
            <ModalLogin
                show={showLogin}
                setShowLogin={setShowLogin}
                onHide={() => setShowLogin(false)}
                onToggle={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                }}
            />
            <ModalRegister
                show={showRegister}
                successReg={() => {
                    setShowLogin(true);
                    setShowRegister(false);
                }}
                onHide={() => setShowRegister(false)}
            />
        </>
    );
};

export default connect(
    ({ user }) => ({
        isAuth: user.isAuth
    }),
    userActions
)(Navbar);
