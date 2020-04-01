import React from "react";
import { Spinner as BaseSpinner } from "react-bootstrap";

import "./Spinner.scss";

const Spinner = props => (
    <div className="spinner">
        <BaseSpinner animation="border" variant="warning" {...props} />
    </div>
);

export default Spinner;
