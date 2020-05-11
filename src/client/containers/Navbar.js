import React, { useState } from "react";
import { connect } from "react-redux";

import { Navbar as BaseNavbar } from "components";
import { ModalLogin, ModalRegister } from "containers";
import { userActions } from "actions";

const Navbar = ({ isAuth, fetchUserSignOut }) => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleSignIn = () => {
        setShowLogin(true);
    };

    const handleSignUp = () => {
        setShowRegister(true);
    };

    const handleSignOut = () => {
        fetchUserSignOut();
    };

    return (
        <>
            <BaseNavbar
                isAuth={isAuth}
                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
                handleSignOut={handleSignOut}
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
