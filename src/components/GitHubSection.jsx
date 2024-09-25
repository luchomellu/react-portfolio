import React, { useState,useEffect,useRef } from 'react'
import GitHubRepository from './GitHubRepository'

const GitHubSection = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const isMounted = useRef(false); // Variable para comprobar si ya se ejecutó

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true; // Marca como "ya montado" después de la primera ejecución

            const fecthRepos = async () => {
                try{
                    const res = await fetch("https://api.github.com/users/luchomellu/repos");
                    const data = await res.json();
                    console.log(data);
                    setRepos(data);
                }
                catch(error){
                    console.log(error);
                } finally{
                    setLoading(false);
                }
            }

            fecthRepos();
        }
    }, []);

    return (
        <section>
            <h2>mis repositorios de github:</h2>
            <div className='lis-repos'>
                {loading ? (
                    <h1>Cargando......</h1>
                ) : repos == [] ? (
                    <h2>No hay repositorios disponibles.</h2>
                ) : (
                    <>
                    {repos.map((repo) => (
                        <GitHubRepository key={ repo.id } repo={ repo } /> 
                    ))}
                    </>
                )}
            </div>
        </section>
    )
}

export default GitHubSection