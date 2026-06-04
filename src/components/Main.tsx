import exp from "../utils/newExp"
import projects from "../utils/newProjects"
import NewExpCard from "../commons/NewExpCard"
import NewProjectCard from "../commons/NewProjectCard"
import { useAppSelector } from "../hooks/hooks";

function Main() {
  const leng = useAppSelector(state => state.lang.esp);

  return (
    <>
      <main>
        <section id="about" className="section-title">
          <h2>{leng ? "SOBRE MÍ" : "About"}</h2>
          <p className="about-body">
            {leng ? 
            <> 
              Soy Desarrollador Front End con especialidad en construir interfaces de usuario intuitivas, inmersivas y pixel-perfect. 
              Disfruto trabajar en la intersección entre diseño y desarrollo, 
              donde una gran experiencia de usuario se encuentra con código robusto, limpio y escalable.
              Actualmente, soy frontend en{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                CGC MINC
              </a>, 
              donde traduzco diseños de alta fidelidad en experiencias 
              responsivas y accesibles, incluyendo animaciones en 2D y 3D.
            </> 
            :
            <> 
              I’m a Front End Developer specializing building intuitive, immersive, pixel-perfect user interfaces. 
              I enjoy working at the intersection of design and development, 
              where great user experience meets robust, clean, and scalable code. 
              Currently, I’m a Front End Developer at{" "}
              <a 
                href="https://minc-cg.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                MINC CG
              </a>, a multidisciplinary studio and a curated retail platform, 
              where I translate high-fidelity designs into a responsive and accessible experience,  
              including 3D animations and fast interactions. This is the work I'm most proud of till this date.
            </>}
          </p>
        </section>

        <section id="experience" className="section-title">
          <h2>{leng?"Experiencia":"Experience"}</h2>
          {exp.map((ele,i)=>(
            <NewExpCard exp={ele} key={i}/>
          ))}
        </section>

        <section id="projects" className="section-title">
          <h2>{leng ? "Proyectos":"Projects"}</h2>
          {projects.map((ele,i)=>(
            <NewProjectCard proj={ele} key={i}/>
          ))}
          {/* <div className="extra-project-links">
            
            <a href={""} target="_blank" rel="noopener noreferrer"> adsfasd</a>
          </div> */}
        </section>

        <section id="charts" className="section-title">
          <h2>Charts</h2>
          <img
            src="http://ghchart.rshah.org/3fc761/brandoncastillodev"
            alt="brandoncastillodev's Github chart"
          />
        </section>
      </main>
      
      <footer>
        <div className="footer-links">
          <p className="firma">Made with ❤️ by Brandon 🏰</p>
        </div>
      </footer>
    </>
  );
}

export default Main;
