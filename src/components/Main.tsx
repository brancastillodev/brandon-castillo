import exp from "../utils/newExp"
import projects from "../utils/newProjects"
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
              Actualmente, soy frontend en{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Minc CG
              </a>, 
              donde traduzco diseños de alta fidelidad en experiencias 
              responsivas y accesibles, incluyendo animaciones en 3D e interacciones rápidas. Este es el trabajo del que estoy más orgulloso hasta la fecha.
            </> 
            :
            <> 
              I'm a Full Stack Developer specializing in building intuitive, immersive, pixel-perfect user interfaces. 
              I enjoy working at the intersection of design and development, 
              where great user experience meets robust, clean, and scalable code. 
              Currently, I'm a Full Stack Developer at{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Minc CG
              </a>, a multidisciplinary studio and a curated retail platform, 
              where I translate high-fidelity designs into a responsive and accessible experience,  
              including 3D animations and fast interactions. This is the work I'm most proud of till this date.
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
          <h2>{leng ? "Proyectos":"Projects"}</h2>
          {projects.map((ele,i)=>(
            <NewProjectCard proj={ele} key={i}/>
          ))}
        </AnimatedSection>

        <AnimatedSection id="charts">
          <h2>Charts</h2>
          <img
            src="http://ghchart.rshah.org/3fc761/brandoncastillodev"
            alt="brandoncastillodev's Github chart"
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
