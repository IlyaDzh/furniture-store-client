import React, { useEffect } from "react";
import { connect } from "react-redux";

import { userActions } from "actions";
import { ScrollToTop, Section, Spinner, Error } from "components";
import { Info, Orders } from "./components";

const Profile = ({ fetchUserData, isAuth, data, isLoading }) => {
    useEffect(() => {
        if (isAuth && !data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section className="profile" title="Профиль">
            <ScrollToTop />
            {isAuth ? (
                !isLoading ? (
                    data && (
                        <>
                            <Info data={data} />
                            <Orders orders={data.orders} />
                        </>
                    )
                ) : (
                    <Spinner />
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
        data: user.data,
        isLoading: user.isLoading
    }),
    userActions
)(Profile);
