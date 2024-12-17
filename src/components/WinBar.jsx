import React from 'react'
import circle from '../assets/svgs/circle-svgrepo-com.svg';
import clear from '../assets/svgs/clear-svgrepo-com.svg';
import styles from './WinBar.module.css';

const WinBar = ({name, color, img}) => {
  console.log(color)
  return (
    <div className={styles.barra} style={{ "--colorBarra": color }}>
        <img className={styles.barImage} src={img} alt="" />
        <p>{name}</p>
        <div className={styles.iconos}>
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            <span>
                <img src={clear} alt="" />
            </span>
        </div>
    </div>
  )
}

export default WinBar