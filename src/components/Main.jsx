import React from 'react'
import GitHubSection from './GitHubSection';
import DownloadCV from './DownloadCV/DownloadCV';
import AboutMe from './AboutMe/AboutMe';
import MyStack from '../components/MyStack/MyStack.jsx';

const Main = () => {
  return (
    <main>
      <AboutMe/>
      <MyStack/>
      <GitHubSection/>
      <DownloadCV/>
    </main>
  );
}

export default Main;