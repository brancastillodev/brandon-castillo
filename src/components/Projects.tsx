import React, { useState } from "react";
import { useAppSelector } from "../store/hooks";
import projects from "../utils/projects";
import ExpCard from "../commons/ExpCard";

function Projects() {
  const leng = useAppSelector((state) => state.lang.esp);
  const [selExp, setSelExp] = useState(projects[0]);
  const [changeItem, setChangeItem] = useState(false);

  return (
    <main className="edu">
      <h3 className="titles">{leng ? "Académico" : "Academic"}</h3>
      <div className="front-page-links footer-links">
        {projects.map((ex, i) => (
          <a
            key={i}
            onClick={(e) => {
              setSelExp(ex);
              setChangeItem(!changeItem);
              e.preventDefault();
            }}
            href="#"
          >
            {selExp.title == ex.title ? <u>{ex.title}</u> : ex.title}
          </a>
        ))}
      </div>
      <ExpCard card={selExp} disparador={changeItem} />
    </main>
  );
}

export default Projects;
