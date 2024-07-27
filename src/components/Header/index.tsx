import { HeaderStyle } from "./styles"
import logo from '../../assets/logo.svg'

export type Props = {
  teste?: boolean
}

const Header = ({ teste = false }: Props) => {

  return (
    <HeaderStyle teste={teste}>
      <div className="container">
        {teste ? <h2>Restaurantes</h2>: ''}
        <img src={logo} alt="logo" />
        {teste ? <h2>0 produto(s) no carrinho</h2> : ''}
        {teste ? '' : <h1>Viva experiências gastronômicas no conforto da sua casa</h1>}
      </div>
    </HeaderStyle>
  )
}

export default Header