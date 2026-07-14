import { useSelector } from "react-redux";

function NewProjectCard({proj}){
  const leng = useSelector(state => state.lang.esp);

  return(
    <div className="proj-card">
      <div className="proj-card__title">
        <a className="exp-card__link" href={proj.web} target="_blank" rel="noopener noreferrer">
          <h4 className="proj-card__title__text">{leng ? proj.nombre : proj.name}</h4>
          <svg className="exp-card__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
      <p className="proj-card__desc">{leng ? proj.descEs :proj.desc}</p>
      <figure className="proj-card__image">
        <img src={proj.image} alt={proj.title}></img>
      </figure>
    </div>
  )
}

export default NewProjectCard;