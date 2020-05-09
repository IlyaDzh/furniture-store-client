import React, { useEffect } from "react";
import { connect } from "react-redux";

import { userActions } from "actions";
import { ScrollToTop, Section, Error } from "components";
import { Info, Orders } from "./components";

const Profile = ({ isAuth, data, fetchUserData }) => {
    useEffect(() => {
        if (isAuth && !data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section className="profile" title="Профиль">
            <ScrollToTop />
            {isAuth ? (
                data && (
                    <>
                        <Info data={data} />
                        <Orders orders={data.orders} />
                    </>
                )
            ) : (
                <Error />
            )}
        </Section>
    );
};

export default connect(
    ({ user }) => ({
        isAuth: user.isAuth,
        data: user.data
    }),
    userActions
)(Profile);
