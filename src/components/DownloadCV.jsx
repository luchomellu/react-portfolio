import React from 'react'
import styles from './DownloadCV.module.css';
import cvES from '../assets/cvs/MellusoLucianoES.pdf';
import cvEN from '../assets/cvs/MellusoLucianoEN.pdf';
import pdf from '../assets/images/directory_closed-4.png'
import folder from '../assets/images/carpetaLucho.png';
import gif from '../assets/svgs/gif.svg'
import WinBar from './WinBar';

const DownloadCV = () => {
    const windowName = "Descargas.zip";
    const windowColor = "rgb(255,105,6)";

    return (
        <div className={styles.downloadSection}>
            <WinBar name={windowName} color={windowColor} img={folder}/>
            <div className={styles.contenidoDW}>
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
            </div>
        </div>
    )
}

export default DownloadCV