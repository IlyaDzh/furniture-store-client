import React, { useEffect } from "react";
import { connect } from "react-redux";

import { infoActions } from "actions";
import { Spinner, Error } from "components";
import { Info } from "../../components";

const AboutUsInfo = ({ fetchAbout, about, error, isLoading }) => {
    useEffect(() => {
        if (!about) {
            fetchAbout();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [about]);

    return isLoading ? (
        <Spinner />
    ) : error && !about ? (
        <Error />
    ) : (
        about && <Info {...about} />
    );
};

export default connect(
    ({ info }) => ({
        about: info.about,
        error: info.error,
        isLoading: info.isLoading
    }),
    infoActions
)(AboutUsInfo);
