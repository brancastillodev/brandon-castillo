import React, { useEffect, useState } from "react";
import left from "../assets/icons/arrow-left-circle.svg";
import right from "../assets/icons/arrow-right-circle.svg";
import ImageModal, { preloadImage } from "./ImageModal";

function ExpCard({ card, disparador }) {
  const [numImg, setNumImg] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setNumImg(0);
  }, [disparador]);

  return (
    <div className="edu-card" style={{ fontSize: "1.1rem" }}>
      <section className="works-header">
        <h3 className="sub-title">{card.title}</h3>
      </section>

      <section className="works-image">
        <figure style={{ aspectRatio: "1280 / 714" }}>
          <img
            src={card.photos[numImg]}
            alt={card.title}
            onClick={() => setZoom(true)}
            onMouseEnter={() => preloadImage(card.photos[numImg])}
            style={{ cursor: "pointer" }}
          />
          {numImg > 0 && (
            <figcaption
              id="left"
              onClick={() => setNumImg(numImg - 1)}
              className="left-right-buttons"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setNumImg(numImg - 1);
                }
              }}
            >
              <img src={left} alt="left-arrow-button" />
            </figcaption>
          )}

          {numImg < card.photos.length - 1 && (
            <figcaption
              id="right"
              onClick={() => setNumImg(numImg + 1)}
              className="left-right-buttons"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setNumImg(numImg + 1);
                }
              }}
            >
              <img src={right} alt="right-arrow-button" />
            </figcaption>
          )}
        </figure>
      </section>

      <ImageModal
        open={zoom}
        src={card.photos[numImg]}
        alt={card.title}
        onClose={() => setZoom(false)}
        onPrev={
          numImg > 0
            ? () => {
                setNumImg(numImg - 1);
              }
            : undefined
        }
        onNext={
          numImg < card.photos.length - 1
            ? () => {
                setNumImg(numImg + 1);
              }
            : undefined
        }
      />

      <section className="works-links">
        <p>
          <b>Links: </b>
          <a href={card.youtube} target="_blank">
            <u>Demo</u>
            <span> </span>
          </a>
          <a href={card.github} target="_blank">
            <u>Github</u>
            <span> </span>
          </a>
          <a href={card.web} target="_blank">
            <u>Website</u>
          </a>
        </p>
      </section>
      <section className="works-desc">
        <h4>Description:</h4>
        <p>{card.desc}</p>
      </section>
      <section className="works-date">
        <p>
          {card.date ? (
            <>
              <b>Date:</b> {card.date}
            </>
          ) : (
            <>
              <b>Start Date:</b> {card.inicio} - <b>End Date:</b> {card.final}
            </>
          )}
        </p>
      </section>
      <section className="main-features">
        <h4>Main Features:</h4>
        <ul className="works-features">
          {card.mainFeat.map((ele) => (
            <li>
              <b>{ele.title} -</b> {ele.desc}
            </li>
          ))}
        </ul>
      </section>
      <section className="works-techs">
        <h4>Technologies used:</h4>
        <ul className="tech-lists  works-features">
          {card.techs.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
      </section>
      {card.tools && (
        <section className="works-tools">
          <h4>Tools for Planning and Design</h4>
          <ul className="tech-lists  works-features">
            {card.tools.map((ele) => (
              <li>{ele}</li>
            ))}
            {card.linksTools &&
              card.linksTools.map((ele) => (
                <li>
                  <a href={ele.link} target="_blank">
                    <u>{ele.title}</u>
                  </a>
                </li>
              ))}
          </ul>
        </section>
      )}
      {/* <section className="main-features">
        <h4>Main Difficulties:</h4>
        <ul className="works-features">
          <li>
            <b>Responsive Design:</b> Optimized for seamless navigation across
            mobile devices, tablets, and desktops.
          </li>
          <li>
            <b>Dynamic Interface:</b> Built with modern technologies to deliver
            engaging animations and an attractive visual experience.
          </li>
          <li>
            <b>Talent Connection:</b> Detailed profiles highlight skills,
            specializations, and featured projects.
          </li>
          <li>
            <b>Scalability:</b> Developed using technologies that support future
            growth and adaptability.
          </li>
        </ul>
      </section> */}
      {/* <hr /> */}
    </div>
  );
}

export default ExpCard;
