import { css } from 'styled-components'

const sizes = {
   xlarge: 1650,
   large: 1280,
   medium: 768,
   small: 400
 }

export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})