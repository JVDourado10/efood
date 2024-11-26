import { HeaderLink, HeaderStyle } from "./styles";
import logo from "../../assets/logo.svg";
import { useLocation, Link } from "react-router-dom";

import { open } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

export type Props = {
  isHome?: boolean;
};

const Header = ({ isHome = false }: Props) => {
  const { pathname } = useLocation();
  isHome = pathname.includes("/restaurante");

  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderStyle isHome={isHome}>
      <div className="container">
        {isHome ? (
          <HeaderLink to="/" className="esquerda">
            Restaurantes
          </HeaderLink>
        ) : (
          ""
        )}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {isHome ? (<h2 onClick={openCart} className="direita"> {items.length} produto(s) no carrinho</h2>) : ""}
        {isHome ? (
          ""
        ) : (
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
