import React from 'react'
import styles from './DownloadCV.module.css';
import circle from '../assets/svgs/circle-svgrepo-com.svg';
import clear from '../assets/svgs/clear-svgrepo-com.svg';
import cvES from '../assets/cvs/MellusoLucianoES.pdf';
import cvEN from '../assets/cvs/MellusoLucianoEN.pdf';
import pdf from '../assets/svgs/pdf.svg'
import gif from '../assets/svgs/gif.svg'

const DownloadCV = () => {
  return (
    <div className={styles.downloadSection}>
        <div className={styles.barraDW}>
            <p>---- descarga.zip ----</p>
            <div className={styles.iconosDW}>
                <img src={circle} alt="" />
                <img src={circle} alt="" />
                <span>
                    <img src={clear} alt="" />
                </span>
            </div>
        </div>
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