import { motion } from 'framer-motion'
import styled from 'styled-components';
import Markup from './markup';

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
          font-size: 4.5rem; 
          line-height: 1.2; 
          font-weight: 800
        `
      case 'XL':
        return `
          font-size: 3.2rem; 
          line-height: 1.2; 
          font-weight: 500
        `
      case 'L':
        return `
          font-size: 2.2rem; 
          line-height: 1.2; 
          font-weight: 400
        `
      default:
        return ''
    }
  }};
  ${(props) => props.variation === 'uppercase' && `
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  `};
  ${(props) => props.color === 'slate' && `
    color: #777;
  `};
  margin: 1rem 0;
`;

const TypographyHeader = styled(motion.div)`
  display: flex;
  position: relative;
`

export default function Header({h, label, size, variation, color}) {
  const tag = `h${h}`

  return (
    <TypographyHeader initial="rest" whileHover="hover" animate="rest">
      <Markup tag={tag} />
      <motion.div>
        <StyledHeader size={size} variation={variation} color={color} as={tag}>
          {label}
        </StyledHeader>
      </motion.div>
    </TypographyHeader>
  )
}