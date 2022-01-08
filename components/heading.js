import { motion } from 'framer-motion'
import styled, { css } from 'styled-components';
// import Markup from './markup';

const StyledHeader = styled.div`
  ${(props) => {
    switch(props.size) {
      case '3XL':
        return `
          font-size: 7.1rem; 
          line-height: 1; 
          font-weight: 800
        `
      case 'XL':
        return `
          font-size: 3.2rem; 
          line-height: 1.2; 
          font-weight: 600
        `
      default:
        return ''
    }
  }};

  ${(props) => props.size === '2XL' && css`
    font-size: 3rem; 
    line-height: 1.2; 
    font-weight: 800;
    ${({ theme }) => theme.large`
      font-size: 4.5rem; 
    `};
  `};

  ${(props) => props.size === 'L' && css`
    font-size: 1.8rem; 
    line-height: 1.2; 
    font-weight: 400;
    ${({ theme }) => theme.large`
      font-size: 2.2rem; 
    `};
  `};

  ${(props) => props.variation === 'uppercase' && `
    letter-spacing: 0.4rem;
    text-transform: uppercase;
  `};
  ${(props) => props.color === 'slate' && `
    color: #777;
  `};
  margin: 1rem 0;
  color: #FF52BF;
`;

const TypographyHeader = styled(motion.div)`
  display: flex;
  position: relative;
`

export default function Header({h, label, size, variation, color}) {
  const tag = `h${h}`

  return (
    <TypographyHeader initial="rest" whileHover="hover" animate="rest">
      {/* <Markup tag={tag} /> */}
      <motion.div>
        <StyledHeader size={size} variation={variation} color={color} as={tag}>
          {label}
        </StyledHeader>
      </motion.div>
    </TypographyHeader>
  )
}