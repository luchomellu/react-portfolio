import React, { useState,useEffect,useRef } from 'react'
import GitHubRepository from './GitHubRepository'
import styles from './GitHubSection.module.css';
import WinBar from './WinBar';
import barImg from '../assets/images/textFile.png';

function GitHubSection() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isMounted = useRef(false); // Variable para comprobar si ya se ejecutó
    const windowName = "repositorios.txt";
    const windowColor = "#0D7C66";

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true; // Marca como "ya montado" después de la primera ejecución

            const fecthRepos = async () => {
                try {
                    const res = await fetch("https://api.github.com/users/luchomellu/repos");
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    const data = await res.json();
                    setRepos(data);
                }
                catch (error) {
                    console.error("Fetching error: ", error);
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fecthRepos();
        }
    }, []);

    return (
        <section className={styles.repos}>
            <WinBar name={windowName} color={windowColor} img={barImg}/>
            <div className={styles.contenido}>
                <div className={styles.listRepos}>
                    {loading ? (
                        <div className={styles.loader} >Cargando...</div>
                    ) : error ? (
                        <h2>Error: {error}</h2>
                    ) : repos.length === 0 ? (
                        <h2>No hay repositorios disponibles.</h2>
                    ) : (
                        <>
                            {repos.map((repo) => (
                                <GitHubRepository key={repo.id} repo={repo} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default GitHubSection