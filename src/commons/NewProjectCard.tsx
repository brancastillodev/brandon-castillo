import { useState } from "react";
import { useSelector } from "react-redux";
import ImageModal from "./ImageModal";

function NewProjectCard({proj}){
  const leng = useSelector(state => state.lang.esp);
  const [zoom, setZoom] = useState(false);

  return(
    <div className="proj-card">
      <div className="proj-card__title">
        <a className="exp-card__link" href={proj.web} target="_blank" rel="noopener noreferrer">
          <h4 className="proj-card__title__text">{leng ? proj.nombre : proj.name}</h4>
          <svg className="exp-card__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
      <p className="proj-card__desc">{leng ? proj.descEs :proj.desc}</p>
      {proj.extra && (
        <div className="proj-card__extra-wrap">
          {proj.extra.map((ele, i) => (
            <div key={i} className="exp-card__extra">
              <a href={ele.link} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
                {ele.name}
              </a>
            </div>
          ))}
        </div>
      )}
      <figure className="proj-card__image">
        <img
          src={proj.image}
          alt={proj.title}
          onClick={() => setZoom(true)}
          style={{ cursor: "pointer" }}
        ></img>
      </figure>
      <ImageModal
        open={zoom}
        src={proj.image}
        alt={proj.title}
        onClose={() => setZoom(false)}
      />
    </div>
  )
}

export default NewProjectCard;