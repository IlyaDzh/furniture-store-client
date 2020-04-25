import React from "react";

import { CatalogItem } from "../";

import image1 from "assets/product/1.jpg";

const CatalogAll = () => (
    <div className="catalog-all">
        <div className="row">
            <div className="col-sm-4">
                <CatalogItem
                    _id="8fdf723k10d"
                    image={image1}
                    title="Гостиные"
                    size="small"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    // image={image2}
                    title="Прихожие"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    // image={image2}
                    title="Кухни"
                    size="small"
                />
            </div>
            <div className="col-sm-4">
                <CatalogItem
                    _id="8fdf723k10d"
                    image={image1}
                    title="Спальни"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    // image={image2}
                    title="Мягкая мебель"
                    size="small"
                />
            </div>
            <div className="col-sm-4">
                <CatalogItem
                    _id="8fdf723k10d"
                    image={image1}
                    title="Детские"
                    size="small"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    // image={image2}
                    title="Библиотеки"
                    size="large"
                />
            </div>
        </div>
    </div>
);

export default CatalogAll;
