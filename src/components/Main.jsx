import React from 'react'
import { useEffect, useRef } from 'react';
import GitHubSection from './GitHubSection';
import myPicture from '../assets/images/pic.jpg';
import gitLogo from '../assets/svgs/github-svgrepo-com.svg';
import linkedinLogo from '../assets/svgs/linkedin-svgrepo-com.svg';
import DownloadCV from './DownloadCV';
import stilo from './Main.module.css';
import circle from '../assets/svgs/circle-svgrepo-com.svg';
import clear from '../assets/svgs/clear-svgrepo-com.svg';

const Main = () => {
  const presentationRef = useRef(null);
  const isMounted = useRef(false); // Variable para comprobar si ya se ejecutó
  
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true; // Marca como "ya montado" después de la primera ejecución

      const presentation = presentationRef.current;
      if (presentation) {
        console.log("Inicio del efecto");
        let text = "Hola! Mi nombre es Luciano Melluso y soy desarrollador de software!";
        typewrite(presentation, text, 0); // Llamar a typewrite pasándole el elemento h1
      }
    }
  }, []); // El efecto se ejecuta una vez al montar el componente
  
  return (
    <main>
      <div className='aboutMe'>
        <div className={stilo.textoide}>
          <h1 ref={presentationRef} className={stilo.presentation}></h1>
          <h1 className={stilo.invisible}>Hola! Mi nombre es Luciano Melluso y soy desarrollador de software!</h1>
        </div>
        <div className='socialsandpic'>
          <div className='contenedorSocials'>
            <div className='socials'>
              <div className="barruli">
                <p>-- socials.exe --</p>
                <div className="iconubis">
                    <img src={circle} alt="" />
                    <img src={circle} alt="" />
                    <span>
                        <img src={clear} alt="" />
                    </span>
                </div>
              </div>
              <div className='links'>
                <p>C:\Users\my-portfolio\social-links.txt</p>
                <a href="https://github.com/luchomellu">{'> Visita mi Github!'}</a>
                <a href="https://www.linkedin.com/in/luchomellu/">{'> Seguime en Linkedin!'}</a>
                <a href="mailto:lmelluso.dev@gmail.com">{'> Contactame via email! '}</a>
              </div>
            </div>
          </div>
          <div className='contenedorPolaroid'>
            <div className='polaroid'>
              <img src={myPicture} alt="" className='pic'/>
            </div>
          </div>
        </div>
        <div className='text-bubble'>
          <p>Soy Luciano Melluso, estudiante de la carrera de Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas. Actualmente resido en Tandil y me encuentro en la etapa final de mi carrera, con solo cuatro exámenes finales pendientes para graduarme. Estoy buscando oportunidades laborales o programas de bootcamp que me permitan aplicar y expandir mis conocimientos y habilidades en el desarrollo de aplicaciones informáticas, mientras concluyo mis estudios.</p>
        </div>
      </div>
      <GitHubSection/>
      <DownloadCV/>
    </main>
  );
}

function typewrite(presentation,text,i){
  presentation.textContent += text[i];
  if(i == text.length -1){
    return;
  }
  setTimeout(() => typewrite(presentation,text,i+1),50)
}

export default Main;