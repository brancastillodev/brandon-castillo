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
              Soy desarrollador Full Stack con especialidad en construir interfaces de usuario intuitivas, inmersivas y pixel-perfect. 
              Disfruto trabajar en la intersección entre diseño y desarrollo, 
              donde una gran experiencia de usuario se encuentra con código robusto, limpio y escalable.
              <br />
              Mi último trabajo es la tienda de indumentaria y diseños digitales{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Minc cg
              </a>, 
              donde contacté al creador debido a que me gustaba lo que <a href="https://www.instagram.com/minc.cg/" target="_blank" rel="noopener noreferrer">diseñaba</a> y  
              toda su impronta y le propuse colaborar. Luego de varias revisiones y archivos enviados, superamos completamente nuestras expectativas con el resultado final. 
              <br />
              {/* Ahora estoy desarrollando una app,{" "}
              <a 
                href="https://www.figma.com/design/kmxd4oJSzoH0eVox9noZoC/Dise%C3%B1o-de-App?node-id=0-1&t=ocxJBAA1fn84vk4D-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow Your Series
              </a>(realizada en el curso de Talento Tech, Diseño UX/UI), para tener registro de episodios y demás detalles sobre tus series y animes favoritos. La interfaz sencilla esta inspirada 
              en las terminal user interfaces, más conocidas como TUI's. */}
            </> 
            :
            <> 
              I'm a Full Stack Developer specializing in building intuitive, immersive, pixel-perfect user interfaces. 
              I enjoy working at the intersection of design and development, 
              where great user experience meets robust, clean, and scalable code. 
              My latest work is the clothing and digital design store{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Minc cg
              </a>, 
              where I contacted the creator because I liked what he <a href="https://www.instagram.com/minc.cg/" target="_blank" rel="noopener noreferrer">designs</a> and his whole imprint, 
              and I proposed a collaboration. After several revisions and files sent back and forth, we completely exceeded our expectations with the final result.
              {/* Now I'm developing a web app,{" "}
              <a 
                href="https://www.figma.com/design/kmxd4oJSzoH0eVox9noZoC/Dise%C3%B1o-de-App?node-id=0-1&t=ocxJBAA1fn84vk4D-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow Your Series
              </a>, (built in the Talento Tech UX/UI Design course), to keep track of episodes and other details about your favorite series and anime. The simple interface is inspired by terminal user interfaces, better known as TUIs. */}
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
