import { useRef, useState } from 'react'
import styles from './styles.module.scss'

export default function Markup({h}) {
  const target = useRef(null);
  const initialMousePos = { x: "0px", y: "50%" };

  const [mousePos, setMousePos] = useState(initialMousePos);
  
  const handleMouseMove = event => {
    event = event.nativeEvent;
    const newX = event.offsetX;
    const newY = event.offsetY;
    const newMousePos = {
      x: newX + "px",
      y: newY + "px"
    };
    setMousePos(newMousePos);
  };

  const handleMouseOut = () => setMousePos(initialMousePos);
  
  return (
    <div
      className={styles.markup_container} 
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={target}
      style={{
        "--maskX": mousePos.x,
        "--maskY": mousePos.y
      }}
    >
      <div 
        className={styles.markup} 
      >
        {`h${h}`}
      </div>
    </div>
  )
}