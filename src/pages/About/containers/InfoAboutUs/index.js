import React from "react";

import "./InfoAboutUs.scss";

import image1 from "assets/about/1.jpg";
import image2 from "assets/about/3.jpg";
import image3 from "assets/about/2.jpg";
import image4 from "assets/about/4.jpg";
import image5 from "assets/about/5.jpg";

const InfoAboutUs = () => {
    return (
        <>
            <p className="about__header">
                Компания «ФКМ» представляет собой современное мебельное производство. Мы создаем
                качественные изделия, в том числе и по индивидуальным проектам. Их отличает
                надежность, функциональностью и практичность. Цеха нашей фабрики расположены в
                Подольске. Они оснащены передовым оборудованием, что обеспечивает необходимые
                эксплуатационные характеристики продукции. Мы свыше 10 лет работаем в сфере
                мебельного производства и постоянно совершенствуем технологии. Более того, мы
                самостоятельно принимаем решение о конечной стоимости изделий, так как не зависим от
                различных посредников. Полный производственный цикл от разработки проекта до сборки
                изделия осуществляется силами наших специалистов.
            </p>

            <div className="about-gallery">
                <div className="about__title">
                    <h4>Производство какой мебели мы осуществляем?</h4>
                </div>
                <div className="about-gallery__grid">
                    <div className="gallery__item gallery__item--1">
                        <ul className="gallery__list">
                            <li>шкафы-купе</li>
                            <li>гардеробные</li>
                            <li>изделия для ванной</li>
                            <li>кухни</li>
                            <li>детские</li>
                            <li>прихожие</li>
                            <li>спальни</li>
                            <li>гостиные</li>
                            <li>диваны, столы и стулья</li>
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
                                Подбор качественных материалов, а также их последующее хранение.
                            </span>{" "}
                            В нашем распоряжении – просторные складские помещения, обеспечивающие
                            оптимальные условия для сохранности древесины.
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Распил ЛДСП и МДФ плит.</span> Операции выполняются согласно
                            утвержденному проекту с помощью профессионального оборудования.
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Кромление.</span> На этом этапе производства мебели на изделия
                            наносятся кромки. Так обрабатываются торцы имеющихся деталей в целях
                            улучшения своего внешнего вида и срока службы.
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Присадка петель.</span> Как правило, при производстве мебели мы
                            используем четырехшарнирные петли.
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Малярные работы.</span> На изделия наносятся специальные защитные
                            покрытия, тонирующие составы или другая лакокрасочная продукция.
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Сборка готового изделия.</span> Специалисты осуществляют монтаж,
                            полностью соблюдая технологии.
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Упаковка.</span> Мы работаем с профессиональными упаковочными
                            материалами, которые обеспечивают надежную защиту изделий во время
                            перевозки.
                        </div>
                    </li>
                </ol>
            </div>
        </>
    );
};

export default InfoAboutUs;
