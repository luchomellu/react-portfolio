import React, { useState, useEffect, useRef } from 'react';
import styles from './MyStack.module.css';
import WinBar from '../WinBar.jsx';
import barImg from '../../assets/images/program_manager-1.png';
import technologies from '../../assets/logos/technologies';

const MyStack = () => {
  const items = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - items.current.offsetLeft);
    setScrollLeft(items.current.scrollLeft);
  };
  const handleMouseLeave = (e) => {
    setIsMouseDown(false);
  };
  const handleMouseUp = (e) => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e) => {
    if(!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - items.current.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    items.current.scrollLeft = scrollLeft - walk;
  };
  
  return (
    <section className={styles.myStack}>
      <WinBar name="My Stack" color="#4B0082" img={barImg} />
      <div className={styles.carouselContainer}>
        <div className={styles.carousel} ref={items}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
          {technologies.map((tech, techIndex) => (
            <div key={techIndex} className={styles.slide}>
              <img draggable="false" src={tech.image || "/placeholder.svg"} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyStack;