import React from "react";

import { Collapse } from "../../components";

const CatalogById = () => {
    return (
        <div className="row">
            <div className="col-sm-5 col-md-4 col-xl-3">
                <Collapse />
            </div>
            <div className="col-sm-7 col-md-8 col-xl-9">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis sequi id aliquam officiis
                    molestiae magnam cupiditate, numquam quam nulla?
                </p>
            </div>
        </div>
    );
};

export default CatalogById;
