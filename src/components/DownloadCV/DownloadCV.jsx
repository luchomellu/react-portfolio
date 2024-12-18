import React from 'react'
import styles from './DownloadCV.module.css';
import folder from '../../assets/images/carpetaLucho.png';
import WinBar from '../WinBar';
import FileExplorer from './FileExplorer';

const DownloadCV = () => {
    const windowName = "Descargas.zip";
    const windowColor = "rgb(255,105,6)";

    return (
        <div className={styles.downloadSection}>
            <WinBar name={windowName} color={windowColor} img={folder}/>
            <FileExplorer/>
        </div>
    )
}

export default DownloadCV