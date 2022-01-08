import { ThemeProvider } from 'styled-components'
import mediaQuery from './utils/styleMediaQueries'

const Theme = ({ children }) => (
  <ThemeProvider
		theme={{
			...mediaQuery
		}}>
		{children}
  </ThemeProvider>
)
export default Theme