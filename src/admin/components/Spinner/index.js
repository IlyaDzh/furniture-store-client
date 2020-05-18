import React from "react";
import { Spinner as BaseSpinner } from "react-bootstrap";

import "./Spinner.scss";

const Spinner = props => (
    <div className="spinner-admin">
        <BaseSpinner animation="border" variant="secondary" {...props} />
    </div>
);

export default Spinner;
