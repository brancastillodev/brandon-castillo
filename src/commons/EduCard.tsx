import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "./ImageModal";

function EduCard({ card }) {
  const [zoom, setZoom] = useState(false);
  return (
    <div className="edu-card">
      <h3 className="sub-title">{card.title}</h3>
      <figure style={{ aspectRatio: card.res }}>
        <img
          src={card.photos[0]}
          alt={card.title}
          onClick={() => setZoom(true)}
          style={{ cursor: "pointer" }}
        />
      </figure>
      <ImageModal
        open={zoom}
        src={card.photos[0]}
        alt={card.title}
        onClose={() => setZoom(false)}
      />
      {card.title ==
        "National School of Cinematographic Experimentation and Realization (ENERC)" && (
        <>
          <p>
            <u>Series Narrative Course </u>
          </p>
          <p>
            Narrative course at the National School of Cinematographic
            Experimentation and Realization (ENERC) in Buenos Aires. This course
            focused on the art of writing and producing narrative series for
            television and digital platforms. The curriculum covered key areas
            such as narrative structure, character development, and episodic
            storytelling.
          </p>

          <p>
            <b>Start Date:</b> Ago 2015 - <b>End Date:</b> Dec 2015
          </p>
          <hr />
        </>
      )}

      <p>
        <u>{card.carrera}</u>
      </p>
      <p>{card.desc}</p>
      
      <p>
        <b>Start Date:</b> {card.inicio} - <b>End Date:</b> {card.final}
      </p>

      {card.works.length > 0 &&<> 
      <p> 
        <b>Most Significant Works:</b>
      </p>
      <div className="tech-lists edu-lists">
      <ul >
        {card.works.map((work, index) => (
          <li key={index}>
            {work.nombre}{" - "} 
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
            >
            {work.nombreTarea}
            </a>
          </li>
        ))}
      </ul>
      </div>
      </>}
      {/* {card.title == "Plataforma 5" && (
        <p className="final-jobs">
          <b>Final Jobs:</b>
          <Link to="/experience" state={{ finalJob: 0 }}>
            <u> Carbon Copy</u>
          </Link>
          <Link to="/experience" state={{ finalJob: 1 }}>
            <u>House of Dev</u>
          </Link>
        </p>
      )} */}
    </div>
  );
}

export default EduCard;
