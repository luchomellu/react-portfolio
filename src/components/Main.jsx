import React from 'react'
import GitHubSection from './GitHubSection';
import DownloadCV from './DownloadCV/DownloadCV';
import AboutMe from './AboutMe/AboutMe';

const Main = () => {
  return (
    <main>
      <AboutMe/>
      <GitHubSection/>
      <DownloadCV/>
    </main>
  );
}

export default Main;