import { HeaderContainer } from './styles'
import gitLogo from '../../assets/Logo.svg'
import coverREffect from '../../assets/cover-right-effect.svg'
import coverLEffect from '../../assets/cover-left-effect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverLEffect} alt="" />
      <img src={gitLogo} alt="" />
      <img src={coverREffect} alt="" />
    </HeaderContainer>
  )
}
