import React, { useEffect } from "react";
import { connect } from "react-redux";

import { infoActions } from "actions";
import { Spinner, Error } from "components";
import { Info } from "../../components";

const PayDelInfo = ({ fetchService, service, error, isLoading }) => {
    useEffect(() => {
        if (!service) {
            fetchService();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [service]);

    return isLoading ? (
        <Spinner />
    ) : error && !service ? (
        <Error />
    ) : (
        service && <Info {...service} />
    );
};

export default connect(
    ({ info }) => ({
        service: info.service,
        error: info.error,
        isLoading: info.isLoading
    }),
    infoActions
)(PayDelInfo);
