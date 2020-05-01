import React, { useEffect } from "react";
import { connect } from "react-redux";

import { userActions } from "actions";
import { ScrollToTop, Section } from "components";
import { Info, Orders } from "./components";

const Profile = ({ isAuth, data, orders, fetchUserData }) => {
    useEffect(() => {
        if (!data) {
            fetchUserData();
        }
    }, [data]);

    return (
        <Section className="profile" title="Профиль">
            <ScrollToTop />
            {isAuth ? (
                data && (
                    <>
                        <Info data={data} />
                        <Orders orders={orders} />
                    </>
                )
            ) : (
                <div>Вы не авторизованы!</div>
            )}
        </Section>
    );
};

export default connect(
    ({ user }) => ({
        isAuth: user.isAuth,
        data: user.data,
        orders: user.orders
    }),
    userActions
)(Profile);
