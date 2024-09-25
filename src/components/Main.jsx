import React from 'react'
import { useEffect, useRef } from 'react';
import GitHubSection from './GitHubSection';
import myPicture from '../assets/images/pic.jpg';
import gitLogo from '../assets/svgs/github-svgrepo-com.svg';
import linkedinLogo from '../assets/svgs/linkedin-svgrepo-com.svg';

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
      <h1 className='presentation' ref={presentationRef}></h1>
      <div className='socialsandpic'>
        <div className='socials'>
          <h2>Seguime en mis redes!</h2>
          <div className='links'>
            <a href="https://github.com/luchomellu">
              <img src={gitLogo} alt="" className='gitLogo'/>
            </a>
            <a href="https://www.linkedin.com/in/luchomellu/">
              <img src={linkedinLogo} alt="" className='linkedinLogo'/>
            </a>
          </div>
        </div>
        <div className='polaroid'>
          <img src={myPicture} alt="" className='pic'/>
        </div>
      </div>
      <div className='text-bubble'>
        <p>Soy Luciano Melluso, estudiante de la carrera de Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas. Actualmente resido en Tandil y me encuentro en la etapa final de mi carrera, con solo cuatro exámenes finales pendientes para graduarme. Estoy buscando oportunidades laborales o programas de bootcamp que me permitan aplicar y expandir mis conocimientos y habilidades en el desarrollo de aplicaciones informáticas, mientras concluyo mis estudios.</p>
      </div>
      <GitHubSection/>
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