import React from 'react'

const Main = () => {
  return (
    <main>
      <div className="about-me">
          <h1 className='presentation'></h1>
          <p>Soy Luciano Melluso, estudiante de la carrera de Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas. Actualmente resido en Tandil y me encuentro en la etapa final de mi carrera, con solo cuatro exámenes finales pendientes para graduarme. Estoy buscando oportunidades laborales o programas de bootcamp que me permitan aplicar y expandir mis conocimientos y habilidades en el desarrollo de aplicaciones informáticas, mientras concluyo mis estudios.</p>
      </div>
      <div className="proyects">
      
      </div>
    </main>
  )
}

function typewrite(presentation,text,i){
  presentation.textContent += text[i];
  if(i == text.length -1){
    return;
  }

  setTimeout(() => typewrite(presentation,text,i+1),50)
}

window.addEventListener('load', function () {
  let text = "Hi! My name is Luciano Melluso and im a software developer!"
  const presentation = document.querySelector(".presentation");
  typewrite(presentation,text,0);
})

export default Main