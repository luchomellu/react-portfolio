import React from 'react'
import styles from './GitHubRepository.module.css';

const GitHubRepository = ( { repo } ) => {
  return (
    <div className={styles.repo}>
        <a href={repo.svn_url}>{repo.name}</a>
        {repo.description != null ? (
          <h3>{repo.description}</h3>
        ) :
        (
          <h3>Sin descripcion</h3>
        )}
    </div>
  )
}

export default GitHubRepository