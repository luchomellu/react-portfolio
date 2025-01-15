import React from 'react'
import styles from './GitHubRepository.module.css';
import images from '../assets/win98images';
import overlayShortcut from '../assets/images/linkMio.png';

const GitHubRepository = ( { repo } ) => {
  return (
    <div className={styles.repo}>
        <img src={images[repo.topics[0]] || images[""]} alt="" />
        <div className={styles.dataRepo}>
          <a href={repo.svn_url}> 
            <h4>{repo.name}</h4> 
            <span class={styles.shortcut}> 
              <img src={overlayShortcut} alt='External link'/>
            </span>
          </a>
          <p>{repo.description || "Sin descripción"}</p>
        </div>
    </div>
  )
}

export default GitHubRepository