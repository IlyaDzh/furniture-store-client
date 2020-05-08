import React from "react";

import { CatalogItem } from "../";

import catalogJSON from "./catalog.json";

const CatalogAll = () => {
    const columnStart = Math.floor(catalogJSON.length / 3);

    return (
        <div className="catalog-all">
            <div className="row">
                <div className="col-md-4">
                    {catalogJSON.slice(0, columnStart).map((item, i) => (
                        <CatalogItem
                            key={item._id}
                            path={item.path}
                            image={item.image}
                            title={item.title}
                            size={i % 2 ? "large" : "small"}
                        />
                    ))}
                </div>
                <div className="col-md-4">
                    {catalogJSON
                        .slice(columnStart, columnStart * 2)
                        .map((item, i) => (
                            <CatalogItem
                                key={item._id}
                                path={item.path}
                                image={item.image}
                                title={item.title}
                                size={i % 2 ? "small" : "large"}
                            />
                        ))}
                </div>
                <div className="col-md-4">
                    {catalogJSON.slice(columnStart * 2).map((item, i) => (
                        <CatalogItem
                            key={item._id}
                            path={item.path}
                            image={item.image}
                            title={item.title}
                            size={i % 2 ? "large" : "small"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogAll;
