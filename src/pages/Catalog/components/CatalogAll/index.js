import React from "react";

import { CatalogItem } from "../";

import image1 from "assets/catalog/item1.jpg";
import image2 from "assets/catalog/item2.jpg";
import image3 from "assets/catalog/item3.jpg";
import image4 from "assets/catalog/item4.jpg";
import image5 from "assets/catalog/item5.jpg";
import image6 from "assets/catalog/item6.jpg";
import image7 from "assets/catalog/item7.jpg";
import image8 from "assets/catalog/item8.jpg";
import image9 from "assets/catalog/item9.jpg";
import image10 from "assets/catalog/item10.jpg";
import image11 from "assets/catalog/item11.jpg";
import image12 from "assets/catalog/item12.jpg";
import image13 from "assets/catalog/item13.jpg";
import image14 from "assets/catalog/item14.jpg";
import image15 from "assets/catalog/item15.jpg";
import image16 from "assets/catalog/item16.jpg";
import image17 from "assets/catalog/item17.jpg";
import image18 from "assets/catalog/item18.jpg";

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
                    image={image4}
                    title="Мягкая мебель"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image7}
                    title="Прихожие"
                    size="small"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image10}
                    title="Кровати"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image13}
                    title="Полки"
                    size="small"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image16}
                    title="Комоды"
                    size="large"
                />
            </div>
            <div className="col-sm-4">
                <CatalogItem
                    _id="8fdf723k10d"
                    image={image2}
                    title="Спальни"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image5}
                    title="Библиотеки"
                    size="small"
                />
                <CatalogItem
                    _id="8fdf723k10d"
                    image={image8}
                    title="Столы"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image11}
                    title="Диваны"
                    size="small"
                />
                <CatalogItem
                    _id="8fdf723k10d"
                    image={image14}
                    title="Вешалки"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image17}
                    title="Тумбы"
                    size="small"
                />
            </div>
            <div className="col-sm-4">
                <CatalogItem
                    _id="8fdf723k10d"
                    image={image3}
                    title="Детские"
                    size="small"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image6}
                    title="Кухни"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image9}
                    title="Стулья"
                    size="small"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image12}
                    title="Кресла"
                    size="large"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image15}
                    title="Зеркала"
                    size="small"
                />
                <CatalogItem
                    _id="6df50hqwe3"
                    image={image18}
                    title="Шкафы"
                    size="large"
                />
            </div>
        </div>
    </div>
);

export default CatalogAll;
