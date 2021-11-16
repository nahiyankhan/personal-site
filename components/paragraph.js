import { motion } from 'framer-motion';
import styled from 'styled-components';

const Paragraph = styled.div`
  ${(props) => {
    switch(props.size) {
      case 'XL':
        return `
          font-size: 1.7rem; 
          line-height: 1.5;
          margin: 1rem 0;
        `
      case 'L':
        return `
          font-size: 1.3rem; 
          line-height: 1.5;
          margin: 1rem 0;
        `
      case 'M':
        return `
          font-size: 1rem; 
          line-height: 1;
          margin: 0.5rem 0;
        `
      default:
        return ''
    }
  }};
`;

const ParagraphContainer = styled(motion.div)`
  display: flex;
  position: relative;
`

const Markup = styled(motion.div)`
  font-size: 0.8rem;
  font-weight: 500;
  color: #858690;
  position: absolute;
  width: 40px;
  height: 100%;
  left: -39px;
  border: 1px solid #322d38;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`

const markupMotion = {
  rest: { 
    opacity: 0, 
    ease: "easeOut", 
    duration: 0.2, 
    type: "tween" 
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn"
    }
  }
}

export default function Header({label, size}) {

  return (
    <ParagraphContainer initial="rest" whileHover="hover" animate="rest">
      <Markup variants={markupMotion}>
        p
      </Markup>
      <Paragraph size={size}>
        {label}
      </Paragraph>
    </ParagraphContainer>
  )
}