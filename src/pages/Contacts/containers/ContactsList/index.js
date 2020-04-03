import React, { useEffect } from "react";
import { connect } from "react-redux";

import { infoActions } from "actions";
import { List } from "../../components";

const ContactsList = ({ fetchContacts, contacts, setError, error }) => {
    useEffect(() => {
        if (!contacts) {
            fetchContacts();
        }
        return () => setError(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contacts]);

    return <List error={error} {...contacts} />;
};

export default connect(
    ({ info }) => ({
        contacts: info.contacts,
        error: info.error
    }),
    infoActions
)(ContactsList);
