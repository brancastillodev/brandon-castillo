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
              Soy Desarrollador Full Stack con especialidad en construir interfaces de usuario intuitivas, inmersivas y pixel-perfect. 
              Disfruto trabajar en la intersección entre diseño y desarrollo, 
              donde una gran experiencia de usuario se encuentra con código robusto, limpio y escalable.
              Mi último trabajo fue el sitio{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Minc Cg
              </a>, 
              donde contacté al creador debido a que me gustaba su <a href="https://www.instagram.com/minc.cg/" target="_blank" rel="noopener noreferrer">material</a> (diseños y animaciones 3D), y le propuse colaborar. Luego de varios archivos enviados, superamos completamente nuestras expectativas. Ahora estoy desarrollando una app web,{" "}
              <a 
                href="https://www.figma.com/design/kmxd4oJSzoH0eVox9noZoC/Dise%C3%B1o-de-App?node-id=0-1&t=ocxJBAA1fn84vk4D-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow Your Series
              </a>, que es una web app de registro de episodios y demás detalles sobre tus series y animes favoritos.
            </> 
            :
            <> 
              I'm a Full Stack Developer specializing in building intuitive, immersive, pixel-perfect user interfaces. 
              I enjoy working at the intersection of design and development, 
              where great user experience meets robust, clean, and scalable code. 
              My latest work was the site{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Minc Cg
              </a>, 
              where I reached out to the creator because I liked his <a href="https://www.instagram.com/minc.cg/" target="_blank" rel="noopener noreferrer">material</a> (designs and 3D animations), 
              and proposed a collaboration. After several files sent, we completely exceeded our expectations. Now I'm developing a web app,{" "}
              <a 
                href="https://www.figma.com/design/kmxd4oJSzoH0eVox9noZoC/Dise%C3%B1o-de-App?node-id=0-1&t=ocxJBAA1fn84vk4D-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow Your Series
              </a>, which is a web app for tracking episodes and other details about your favorite series and anime.
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
