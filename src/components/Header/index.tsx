import { HeaderStyle } from "./styles"
import logo from '../../assets/logo.svg'
import { useLocation, Link } from "react-router-dom"

export type Props = {
  isHome?: boolean
}

const Header = ({ isHome = false }: Props) => {
  const location = useLocation()
  location.pathname === '/restaurante' ? isHome = true : isHome = false;

  return (
    <HeaderStyle isHome={isHome}>
      <div className="container">
        {isHome ? <h2>Restaurantes</h2>: ''}
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        {isHome ? <h2>0 produto(s) no carrinho</h2> : ''}
        {isHome ? '' : <h1>Viva experiências gastronômicas no conforto da sua casa</h1>}
      </div>
    </HeaderStyle>
  )
}

export default Header