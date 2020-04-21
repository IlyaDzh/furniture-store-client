import React, { useEffect } from "react";
import { connect } from "react-redux";

import { infoActions } from "actions";
import { ScrollToTop, Section, Spinner, Error } from "components";
import { Info } from "./components";

const PaymentDelivery = ({ fetchService, service, error, isLoading }) => {
    useEffect(() => {
        if (!service) {
            fetchService();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [service]);

    return (
        <Section className="pay-del" title="Оплата и доставка">
            <ScrollToTop />
            {isLoading ? (
                <Spinner />
            ) : error && !service ? (
                <Error />
            ) : (
                service && <Info {...service} />
            )}
        </Section>
    );
};

export default connect(
    ({ info }) => ({
        service: info.service,
        error: info.error,
        isLoading: info.isLoading
    }),
    infoActions
)(PaymentDelivery);
