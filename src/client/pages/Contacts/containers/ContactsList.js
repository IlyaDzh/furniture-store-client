import React, { useEffect } from "react";
import { connect } from "react-redux";

import { infoActions } from "actions";
import { Spinner } from "components";
import { List } from "../components";

const ContactsList = ({ fetchContacts, contacts, error, isLoading }) => {
    useEffect(() => {
        if (!contacts) {
            fetchContacts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contacts]);

    return isLoading ? (
        <Spinner />
    ) : error && !contacts ? (
        <div>Невозможно отобразить данные</div>
    ) : (
        contacts && <List {...contacts} />
    );
};

export default connect(
    ({ info }) => ({
        contacts: info.contacts,
        error: info.error,
        isLoading: info.isLoading
    }),
    infoActions
)(ContactsList);
