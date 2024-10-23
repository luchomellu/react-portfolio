import React from 'react'
import styles from './GitHubRepository.module.css';
import codesvg from '../assets/svgs/code-svgrepo-com.svg'

const GitHubRepository = ( { repo } ) => {
  return (
    <div className={styles.repo}>
        <img src={codesvg} alt="" />
        <div className={styles.dataRepo}>
          <a href={repo.svn_url}>{repo.name}</a>
          {repo.description != null ? (
            <p>{repo.description}</p>
          ) :
          (
            <p>Sin descripcion</p>
          )}
        </div>
        
    </div>
  )
}

export default GitHubRepository