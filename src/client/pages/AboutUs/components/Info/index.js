import React from "react";
import PropTypes from "prop-types";

import "./Info.scss";

import image1 from "assets/about/1.jpg";
import image2 from "assets/about/3.jpg";
import image3 from "assets/about/2.jpg";
import image4 from "assets/about/4.jpg";
import image5 from "assets/about/5.jpg";

const Info = ({ text, gallery_types, stages }) => (
    <>
        <div className="about__header">
            <p>{text}</p>
        </div>

        <div className="about-gallery">
            <div className="about__title">
                <h4>Производство какой мебели мы осуществляем?</h4>
            </div>
            <div className="about-gallery__grid">
                <div className="gallery__item gallery__item--1">
                    <ul className="gallery__list">
                        <li>Гостиные</li>
                        <li>Спальни</li>
                        <li>Кухни</li>
                        <li>Шкафы и полки</li>
                        <li>Детские</li>
                        <li>Прихожие</li>
                        <li>Столы, стулья и кресла</li>
                        <li>Диваны</li>
                    </ul>
                </div>
                <div className="gallery__item gallery__item--2">
                    <img src={image1} className="gallery__img" alt="" />
                </div>
                <div className="gallery__item gallery__item--3">
                    <img src={image2} className="gallery__img" alt="" />
                </div>
                <div className="gallery__item gallery__item--4">
                    <img src={image3} className="gallery__img" alt="" />
                </div>
                <div className="gallery__item gallery__item--5">
                    <img src={image4} className="gallery__img" alt="" />
                </div>
                <div className="gallery__item gallery__item--6">
                    <img src={image5} className="gallery__img" alt="" />
                </div>
            </div>
        </div>

        <div className="about-stages">
            <div className="about__title">
                <h4>Этапы мебельного производства</h4>
            </div>
            <ol className="stages__list">
                <li>
                    <div>
                        <span>
                            Подбор качественных материалов, а также их последующее
                            хранение.
                        </span>{" "}
                        В нашем распоряжении – просторные складские помещения,
                        обеспечивающие оптимальные условия для сохранности древесины.
                    </div>
                </li>
                <li>
                    <div>
                        <span>Распил ЛДСП и МДФ плит.</span> Операции выполняются
                        согласно утвержденному проекту с помощью профессионального
                        оборудования.
                    </div>
                </li>
                <li>
                    <div>
                        <span>Кромление.</span> На этом этапе производства мебели на
                        изделия наносятся кромки. Так обрабатываются торцы имеющихся
                        деталей в целях улучшения своего внешнего вида и срока
                        службы.
                    </div>
                </li>
                <li>
                    <div>
                        <span>Присадка петель.</span> Как правило, при производстве
                        мебели мы используем четырехшарнирные петли.
                    </div>
                </li>
                <li>
                    <div>
                        <span>Малярные работы.</span> На изделия наносятся
                        специальные защитные покрытия, тонирующие составы или другая
                        лакокрасочная продукция.
                    </div>
                </li>
                <li>
                    <div>
                        <span>Сборка готового изделия.</span> Специалисты
                        осуществляют монтаж, полностью соблюдая технологии.
                    </div>
                </li>
                <li>
                    <div>
                        <span>Упаковка.</span> Мы работаем с профессиональными
                        упаковочными материалами, которые обеспечивают надежную
                        защиту изделий во время перевозки.
                    </div>
                </li>
            </ol>
        </div>
    </>
);

Info.propTypes = {
    text: PropTypes.string,
    gallery_types: PropTypes.arrayOf(PropTypes.string),
    stages: PropTypes.arrayOf(PropTypes.object)
};

export default Info;
