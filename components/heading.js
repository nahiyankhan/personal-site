import { motion } from 'framer-motion'
import styled from 'styled-components';

const StyledHeader = styled.div`
  ${(props) => {
    switch(props.size) {
      case '3XL':
        return `
          font-size: 7.1rem; 
          line-height: 1; 
          font-weight: 800
        `
      case '2XL':
        return `
          font-size: 3.4rem; 
          line-height: 1.2; 
          font-weight: 700
        `
      case 'XL':
        return `
          font-size: 1.7rem; 
          line-height: 1.2; 
          font-weight: 600
        `
      default:
        return ''
    }
  }};
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const TypographyHeader = styled(motion.div)`
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

export default function Header({h, label, size}) {
  const tag = `h${h}`

  return (
    <TypographyHeader initial="rest" whileHover="hover" animate="rest">
      <Markup variants={markupMotion}>
        {tag}
      </Markup>
      <motion.div>
        <StyledHeader size={size} as={tag}>
          {label}
        </StyledHeader>
      </motion.div>
    </TypographyHeader>
  )
}