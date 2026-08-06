import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import cvEn from "../assets/cvs/Brandon Castillo Resume.pdf"
import cvEs from "../assets/cvs/Brandon Castillo.pdf";
import heroPhoto from "../assets/images/pp.webp";
import { Link} from "react-router-dom";
import { setLang } from "../state/lang";
import { toggleTheme } from "../state/theme";
import { useAppSelector } from "../hooks/hooks";

function Main() {
  const [esp, setEsp] = useState(useAppSelector(state => state.lang.esp));
  const leng = useAppSelector(state => state.lang.esp)
  const dark = useAppSelector(state => state.theme.dark)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setLang(esp))
  },[esp])

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light")
  },[dark])

  return (
    <header>
      <nav>
        <Link
          className="home-button"
          to={"/"}
        ></Link>
        <div className="nav-controls">
          <div className="set-lang">
            <p onClick={()=> setEsp(false)} className={!esp ? "clicked" : "not-clicked"}> EN </p>
            <p onClick={()=> setEsp(true)} className={esp ? "clicked" : "not-clicked"}> ES </p>
          </div>
          <button
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 18a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zM1 11h3v2H1v-2zm19 0h3v2h-3v-2zM3.515 19.071l2.121-2.121 1.414 1.414-2.121 2.121-1.414-1.414zM16.95 5.636l2.121-2.121 1.414 1.414-2.121 2.121L16.95 5.636z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M10 7a7 7 0 0012 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0010 7z"/>
              </svg>
            )}
          </button>
        </div>
      </nav> 

      <div id="hero">
        <figure className="hero-photo">
          <img src={heroPhoto} alt="Brandon Castillo profile picture" />
        </figure>
        <h1>Brandon Castillo</h1>
        <h2>{leng ? " Desarrollador Full Stack" : "Full Stack Developer"}</h2>
     
        <p className="hero-description">
            {
              leng
                ? (
                  <>
                    Construyo experiencias digitales inmersivas,
                    <span className="rainbow-hover"> interactivas</span>,
                    y pixel-perfect.
                  </>
                )
                : (
                  <>
                    I build immersive,
                    <span className="rainbow-hover"> interactive</span>,
                    pixel-perfect digital experiences.
                  </>
                )
            }
        </p>
        
        <div className="hero-icons">
          <a
            href="https://github.com/brandoncastillodev"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6"
              aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">  </path></svg>
          </a>
          <a
            href="https://linkedin.com/in/brandoncastillodev"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
              </path>
            </svg>
          </a>
          <a
            href="https://x.com/brancastillodev"
            title="X / Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
         <a
            href={leng?cvEs:cvEn}
            title={leng?"Currículum":"Résumé"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true">
              <path d="M6 2.25A2.25 2.25 0 003.75 4.5v15A2.25 2.25 0 006 21.75h12A2.25 2.25 0 0020.25 19.5v-15A2.25 2.25 0 0018 2.25H6zm3 5.25h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zm0 3h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zm0 3h4.5a.75.75 0 010 1.5H9a.75.75 0 010-1.5z"/>
            </svg>
          </a> 
        </div>
      </div>

      <div className="navbar-links">
        <a href="#about">{leng ? "Sobre mí" : "About"}</a>
        <a href="#skills">{leng ? "Skills" : "Skills"}</a>
        <a href="#experience">{leng ? "Experiencia" : "Experience"}</a>
        <a href="#projects">{leng ? "Proyectos" : "Projects"}</a>
        <a href="#charts">Charts</a>
        <a href="#contact">{leng ? "Contacto" : "Contact"}</a>
      </div>
    </header>
  );
}

export default Main;
