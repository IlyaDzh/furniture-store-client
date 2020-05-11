import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ScrollToTop, Section, Spinner, Error } from "components";
import { Info } from "./components";
import { infoActions } from "actions";

const AboutUs = ({ fetchAbout, about, error, isLoading }) => {
    useEffect(() => {
        if (!about) {
            fetchAbout();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [about]);

    return (
        <Section className="about" title="О нашей фабрике">
            <ScrollToTop />
            {isLoading ? (
                <Spinner />
            ) : error && !about ? (
                <Error />
            ) : (
                about && <Info {...about} />
            )}
        </Section>
    );
};

export default connect(
    ({ info }) => ({
        about: info.about,
        error: info.error,
        isLoading: info.isLoading
    }),
    infoActions
)(AboutUs);
