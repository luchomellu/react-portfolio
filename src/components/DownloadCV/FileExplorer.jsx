import React from 'react'
import { useState } from "react";
import data from "../../assets/foldersData";
import styles from './FileExplorer.module.css';
import left from '../../assets/svgs/left.svg'
import right from '../../assets/svgs/right.svg'

const FileExplorer = () => {
    const [currentFolder, setCurrentFolder] = useState(data.items);
    const [history, setHistory] = useState([]);

    const openFolder = (folder) => {
        if (folder.type === "folder") {
            setHistory([...history, currentFolder]);
            setCurrentFolder(folder.items);
        }
    };
    
    const goBack = () => {
        if (history.length > 0) {
          setCurrentFolder(history[history.length - 1]);
          setHistory(history.slice(0, -1));
        }
    };

    return (
        <>
        <div className={styles.nav}>
            <button onClick={goBack} style={{display: history.length > 0 ? "flex" : "none"}}>
                <img src={left}/>
                <p>Volver</p>
            </button>
        </div>
        <div className={styles.contenidoDW}>
            {currentFolder.map((item, index) => (
            item.type === "pdf" ? (
                // Archivos PDF descargables
                <a key={index} href={item.file} download={item.name}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </a>
              ) : (
                // Carpetas navegables u otros tipos
                <a key={index} onClick={() => openFolder(item)} style={{ cursor: "pointer" }}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </a>
              )
            ))}
        </div>
        </>
    )
}

export default FileExplorer

{/*
    <a href={cvES} download="MellusoLucianoCV-ES.pdf">
        <img src={pdf} alt="" />
        <p>MellusoLucianoCV-ES.pdf</p>
    </a>
    <a href={cvEN} download="MellusoLucianoCV-EN.pdf">
        <img src={pdf} alt="" />
        <p>MellusoLucianoCV-EN.pdf</p>
    </a>
    <a href="">
        <img src={gif} alt="" />
        <p>jijiji.pdf</p>
    </a>          
*/}