import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";

import { Section, Spinner } from "admin/components";
import { About as BaseAbout } from "../components";
import { aboutActions } from "admin/actions";
import { phoneRegExp } from "utils/constants";

const About = ({ fetchInfo, editInfo, data, isLoading, error }) => {
    useEffect(() => {
        if (!data) {
            fetchInfo();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section title="О нас" className="admin-about">
            {isLoading ? (
                <Spinner />
            ) : (
                data && <AboutEnhancer data={data} editInfo={editInfo} />
            )}
        </Section>
    );
};

const AboutEnhancer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data: { about, contacts } }) => ({
        text: about.text,
        number: contacts.number,
        email: contacts.email,
        time: contacts.time,
        address_office: contacts.address_office,
        address_prod: contacts.address_prod
    }),
    validationSchema: Yup.object({
        number: Yup.string().matches(phoneRegExp, "Не правильно набран номер"),
        email: Yup.string().email("Неверный E-mail!")
    }),
    handleSubmit: (values, { resetForm, props: { editInfo } }) => {
        values.time = values.time.toString().split(",");
        editInfo(values)
            .then(() => {
                resetForm();
            })
            .catch(() => {});
    }
})(BaseAbout);

export default connect(
    ({ about }) => ({
        fetchInfo: about.fetchInfo,
        editInfo: about.editInfo,
        data: about.data,
        isLoading: about.isLoading,
        error: about.error
    }),
    aboutActions
)(About);
