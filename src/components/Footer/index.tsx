import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import { Link } from 'react-router-dom'
import { FooterStyle, SocialMedias } from './styles'


const Footer = () => {
  return (
    <FooterStyle>
      <Link to='/'><img src={logo} alt="" /></Link>
      <SocialMedias>
        <li><a href="https://www.instagram.com" target='_blank'><img src={instagram} alt="" /></a></li>
        <li><a href="https://www.facebook.com" target='_blank'><img src={facebook} alt="" /></a></li>
        <li><a href="https://www.twitter.com" target='_blank'><img src={twitter} alt="" /></a></li>
      </SocialMedias>
      <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
    </FooterStyle>
  )
}

export default Footer