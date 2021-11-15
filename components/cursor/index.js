import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useMousePosition from '../hooks/useMousePosition'
import styles from './styles.module.scss'

export default function Cursor() {
  const { x, y } = useMousePosition();
  const [clicked, setClicked] = useState(false);

  const addEventListeners = () => {
    document.addEventListener("mousedown", onMouseDown);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousedown", onMouseDown);
  };
  
  const onMouseDown = () => {
      setClicked(true);
  };

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const pulse_variants = {
    initial: { scale: 0, opacity: 1, translate: "-50%, -50%" },
    pulse: { scale: 1.5, opacity: 0, translate: "-50%, -50%" }
  }

  return (
    <>
      <div 
        className={styles.cursor} 
        style={{
          left: `${x}px`,
          top: `${y}px`
        }}
      />
      <motion.div 
        className={styles.pulse}
        variants={pulse_variants}
        initial="initial"
        animate={clicked ? "pulse" : "" }
        onAnimationComplete={() => setClicked(false)}
        style={{
          left: `${x}px`,
          top: `${y}px`
        }}
      ></motion.div>
    </>
  )
}