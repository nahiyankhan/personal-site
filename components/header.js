import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from 'styled-components'
import Paragraph from './paragraph'
import Khan from './khan'

const HeaderContainer = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 140px;
  padding: 0 140px;
  overflow: hidden;
  z-index: 1;
`

const HeaderBackground = styled.div`
  background: radial-gradient(farthest-corner at 40px 40px, #18181a 0%, #151216 100%);
  position: absolute;
  top: 0;
  left: 142px;
  height: 100vh;
  width: 100vw;
`

const HeaderContent = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`

`

const MenuContainer = styled.div`
  position: relative;
`

const Menu = styled.ul`
  list-style: none;
  display: flex;

`

const MenuItem = styled.li`
  margin-right: 80px;
`

const tagline = 'UX Engineer | Design Systems'

export default function Header() {
  const { scrollY } = useViewportScroll();
  const moveUp = useTransform(scrollY, [0, 720], [152, 0])

  return (
    <HeaderContainer>
      <HeaderBackground />
      <HeaderContent
        style={{
          y: moveUp
        }}
      >
        <LogoContainer>
          <Khan small/>

          <Paragraph 
            label={tagline} 
            size="M"
          />
        </LogoContainer>

        <MenuContainer>
          <Menu>
            <MenuItem>
              About
            </MenuItem>
            <MenuItem>
              Projects
            </MenuItem>
            <MenuItem>
              Contact
            </MenuItem>
          </Menu>
        </MenuContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}