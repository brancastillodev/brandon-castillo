import exp from "../utils/newExp"
import projects from "../utils/newAcademics"
import projects2 from "../utils/projects"
import NewExpCard from "../commons/NewExpCard"
import NewProjectCard from "../commons/NewProjectCard"
import Skills from "./Skills"
import Contact from "./Contact"
import { useAppSelector } from "../hooks/hooks";
import { useScrollReveal } from "../hooks/useScrollReveal";

function AnimatedSection({ id, children }: { id: string; children: React.ReactNode }) {
  const { ref, visible } = useScrollReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`section-title ${visible ? "reveal-visible" : "reveal"}`}
    >
      {children}
    </section>
  );
}

function Main() {
  const leng = useAppSelector(state => state.lang.esp);

  return (
    <>
      <main>
        <AnimatedSection id="about">
          <h2>{leng ? "SOBRE MÍ" : "About"}</h2>
          <p className="about-body">
            {leng ? 
            <> 
              Soy desarrollador full stack jr con especialidad en construir interfaces de usuario intuitivas, inmersivas y pixel-perfect. 
              Disfruto trabajar en la intersección entre diseño y desarrollo, 
              donde una gran experiencia de usuario se encuentra con código robusto, limpio y escalable.
              <br />
              Mi último trabajo es la tienda de indumentaria{", "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                minc.cg
              </a>, 
              donde contacté al creador debido a que me gustaban sus <a href="https://www.instagram.com/minc.cg/" target="_blank" rel="noopener noreferrer">proyectos</a> y le propuse colaborar. 
              Luego de varias revisiones y archivos enviados, superamos completamente nuestras expectativas con el resultado final. 
              <br />
              Ahora estoy trabajando en una mobile/web app,{" "}
              <a 
                href="https://www.figma.com/design/kmxd4oJSzoH0eVox9noZoC/Dise%C3%B1o-de-App?node-id=0-1&t=ocxJBAA1fn84vk4D-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                follow your series
              </a>, donde puedo guardar cada episodio de las series y animes que voy viendo y mantener track. 
            </> 
            :
            <> 
              I'm a full stack jr developer specializing in building intuitive, immersive, pixel-perfect user interfaces. 
              I enjoy working at the intersection of design and development, 
              where great user experience meets robust, clean, and scalable code. 
              <br/>
              My latest work is the clothing store{", "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              minc.cg
              </a>, 
              where I contacted the creator because I liked his <a href="https://www.instagram.com/minc.cg/" target="_blank" rel="noopener noreferrer">projects </a> 
              and proposed to collaborate. After several revisions and files sent back and forth, we completely exceeded our expectations with the final result.
              <br />
              Now I'm working on a mobile/web app,{" "}
              <a 
                href="https://www.figma.com/design/kmxd4oJSzoH0eVox9noZoC/Dise%C3%B1o-de-App?node-id=0-1&t=ocxJBAA1fn84vk4D-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                follow your series
              </a>, where I can save every episode that I seen of my favorites animes and series and keep track.
            </>}
          </p>
        </AnimatedSection>

        <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection>

        <AnimatedSection id="experience">
          <h2>{leng?"Experiencia":"Experience"}</h2>
          {exp.map((ele,i)=>(
            <NewExpCard exp={ele} key={i}/>
          ))}
        </AnimatedSection>

        <AnimatedSection id="projects">
          <h2>{leng ? "Académico":"Academic"}</h2>
          {projects.map((ele,i)=>(
            <NewProjectCard proj={ele} key={i}/>
          ))}
        </AnimatedSection>

        <AnimatedSection id="my-projects">
          <h2>{leng ? "Proyectos" : "Projects"}</h2>
          {projects2.map((ele,i)=>(
            <NewProjectCard proj={ele} key={i}/>
          ))}
          <a
            className="projects-more"
            href="https://brandon-portfolio-phi.vercel.app/projects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {leng ? "Ver más proyectos." : "See more projects."}
          </a>
        </AnimatedSection>

        <AnimatedSection id="charts">
          <h2>Charts</h2>
          <img
            src="http://ghchart.rshah.org/3fc761/brancastillodev"
            alt="brancastillodev's Github chart"
          />
        </AnimatedSection>

        <Contact />
      </main>
      
      <footer>
        <div className="footer-links">
          <p className="firma">Made with ❤️ by Brandon 🏰 Buenos Aires </p>
        </div>
      </footer>
    </>
  );
}

export default Main;
