import { useState } from "react";
import {
  BotaoFechar,
  Button,
  CardDescription,
  CardStyle,
  CardTitle,
  ImageStyle,
  Modal,
  ModalContainer,
  ModalContent,
  ModalImage
} from "./styles";

import { add, open } from "../../store/reducers/cart";

import Fechar from '../../assets/close.svg'

import { PratoType } from "../../pages/Home";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
export const getPreco = (preco: number) => {
    let precoFormatado = preco.toString(10)
    if(precoFormatado.indexOf('.') == precoFormatado.length - 2) {
      precoFormatado = precoFormatado.concat('0')
    }
    return precoFormatado.replace('.', ',');
};
  
const ItemCard = ({item}: {item: PratoType}) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    setModal(false)
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 165) {
      return descricao.slice(0, 165) + "...";
    }
    return descricao;
  };

  

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if(event.target === event.currentTarget) {
      setModal(false)
    }
  }

  return (
    <>
      <CardStyle>
        <ImageStyle src={item.foto} />
        <CardTitle>{item.nome}</CardTitle>
        <CardDescription>{getDescricao(item.descricao)}</CardDescription>
        <Button onClick={() => setModal(!modal)}>Mais detalhes</Button>
      </CardStyle>
      <Modal isActive={modal} onClick={handleOutsideClick}>
        <ModalContainer>
          <ModalImage src={item.foto} />
          <ModalContent>
            <BotaoFechar onClick={() => setModal(false)}>
              <img src={Fechar} alt="" />
            </BotaoFechar>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p>Serve: {item.porcao}</p>
            <Button onClick={addToCart}>Adicionar ao carrinho - R$ {getPreco(item.preco)}</Button>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ItemCard;
