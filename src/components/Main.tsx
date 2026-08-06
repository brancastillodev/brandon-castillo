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
              Soy Desarrollador Full Stack. Me especializo en crear interfaces que se sienten bien, se ven bien y funcionan bien.
              Me gusta estar en el medio del diseño y el código, donde la experiencia del usuario se encuentra con código limpio y escalable.
              Actualmente estoy en{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Minc CG
              </a>, 
              un estudio multidisciplinario donde transformo diseños de alta fidelidad en experiencias reales: animaciones 3D, interacciones rápidas, responsive y accesible. Es el proyecto del que más orgulloso estoy.
            </> 
            :
            <> 
              I'm a Full Stack Developer. I build interfaces that look good, feel good, and work good.
              I like being in the middle of design and code, where user experience meets clean, scalable architecture.
              Right now I'm at{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Minc CG
              </a>, a multidisciplinary studio where I turn high-fidelity designs into real experiences: 3D animations, fast interactions, responsive and accessible. It's the project I'm most proud of.
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
