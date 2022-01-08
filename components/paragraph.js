import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
// import Markup from './markup';

const Paragraph = styled.div`
  ${(props) => {
    switch(props.size) {
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
      case 'S':
        return `
          font-size: 0.8rem; 
          line-height: 1;
          margin: 0.5rem 0;
        `
      default:
        return ''
    }
  }};

  ${(props) => props.size === 'XL' && css`
    font-size: 1.4rem; 
    line-height: 1.5;
    margin: 1rem 0;
    ${({ theme }) => theme.large`
      font-size: 1.7rem; 
    `};
  `};

  ${(props) => props.variation === 'uppercase' && `
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  `};

  ${(props) => props.color === 'slate' && `
    color: #777;
  `};

  ${(props) => props.color === 'hotpink' && `
    color: #FF52BF;
  `};
`;

const ParagraphContainer = styled(motion.div)`
  display: flex;
  position: relative;
`

export default function Header({label, size, variation, color}) {

  return (
    <ParagraphContainer initial="rest" whileHover="hover" animate="rest">
      {/* <Markup tag="p" /> */}
      <Paragraph size={size} variation={variation} color={color}>
        {label}
      </Paragraph>
    </ParagraphContainer>
  )
}