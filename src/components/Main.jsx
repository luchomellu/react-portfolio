import React from 'react'
import { useEffect, useRef } from 'react';
import GitHubSection from './GitHubSection';
import DownloadCV from './DownloadCV';
import AboutMe from './AboutMe';

const Main = () => {
  return (
    <main>
      <AboutMe/>
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