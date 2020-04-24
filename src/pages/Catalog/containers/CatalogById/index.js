import React from "react";

import { Menu } from "../";

const CatalogById = () => {
    return (
        <div className="row">
            <div className="col-sm-5 col-md-4 col-xl-3">
                <Menu />
            </div>
            <div className="col-sm-7 col-md-8 col-xl-9">
                <h4>Мебель для библиотеки</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                    corporis sequi id aliquam officiis molestiae magnam cupiditate,
                    numquam quam nulla?
                </p>
            </div>
        </div>
    );
};

export default CatalogById;
