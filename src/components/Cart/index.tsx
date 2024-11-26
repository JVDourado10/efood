import { useDispatch, useSelector } from "react-redux"
import { Overlay, CartContainer, Sidebar, Total, DivTotal, Button, Item, Itens, Imagem, Remover } from "./styles"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import { getPreco } from "../ItemCard"
import Lixeira from '../../assets/lixeira.svg'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, atual) => {
      return acc += atual.preco
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Itens>
          {items.map((item) => (
            <Item>
              <Imagem src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>R$ {getPreco(item.preco)}</p>
              </div>
              <Remover onClick={() => removeItem(item.id)} src={Lixeira} />
            </Item>
          ))}
        </Itens>
        <DivTotal>
          <Total>Valor total</Total>
          <Total>R$ {getPreco(getTotalPrice())}</Total>
        </DivTotal>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart