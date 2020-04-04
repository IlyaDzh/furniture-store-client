import React from "react";
import PropTypes from "prop-types";

import "./Info.scss";

import image1 from "assets/about/1.jpg";
import image2 from "assets/about/3.jpg";
import image3 from "assets/about/2.jpg";
import image4 from "assets/about/4.jpg";
import image5 from "assets/about/5.jpg";

const Info = ({ text, gallery_types, gallery, stages }) => (
    <>
        <div className="about__header">
            {text && text.map((item, i) => <p key={i}>{item}</p>)}
        </div>

        <div className="about-gallery">
            <div className="about__title">
                <h4>Производство какой мебели мы осуществляем?</h4>
            </div>
            <div className="about-gallery__grid">
                <div className="gallery__item gallery__item--1">
                    <ul className="gallery__list">
                        {gallery_types &&
                            gallery_types.map((item, i) => <li key={i}>{item}</li>)}
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
                {stages &&
                    stages.map(item => (
                        <li key={item._id}>
                            <div>
                                <span>{item.title}</span> {item.stage}
                            </div>
                        </li>
                    ))}
            </ol>
        </div>
    </>
);

Info.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string),
    gallery_types: PropTypes.arrayOf(PropTypes.string),
    gallery: PropTypes.arrayOf(PropTypes.string),
    stages: PropTypes.arrayOf(PropTypes.object)
};

export default Info;
