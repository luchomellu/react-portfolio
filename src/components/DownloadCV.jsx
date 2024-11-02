import React from 'react'
import styles from './DownloadCV.module.css';
import circle from '../assets/svgs/circle-svgrepo-com.svg';
import clear from '../assets/svgs/clear-svgrepo-com.svg';
import cvES from '../assets/cvs/MellusoLucianoES.pdf';
import cvEN from '../assets/cvs/MellusoLucianoEN.pdf';
import downloadSVG from '../assets/svgs/file-download.svg'

const DownloadCV = () => {
  return (
    <div className={styles.downloadSection}>
        <div className={styles.barraDW}>
            <div className={styles.iconosDW}>
                <img src={circle} alt="" />
                <img src={circle} alt="" />
                <span>
                    <img src={clear} alt="" />
                </span>
            </div>
        </div>
        <div className={styles.contenidoDW}>
            <h2>Descarga mi curriculum!</h2>
            <iframe src="https://giphy.com/embed/MxYQrB9jeGzza"></iframe>  
            <div className={styles.cvs}>
                <a href={cvES} download="MellusoLucianoCV-ES.pdf">
                    <img src={downloadSVG} alt="" />
                    <h3>Español</h3>
                </a>
                <a href={cvEN} download="MellusoLucianoCV-EN.pdf">
                    <img src={downloadSVG} alt="" />
                    <h3>Ingles</h3>
                </a>
            </div>
        </div>
    </div>
  )
}

export default DownloadCV