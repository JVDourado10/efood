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

import Fechar from '../../assets/close.svg'

import { PratoType } from "../../pages/Home";

const ItemCard = ({
  nome,
  descricao,
  foto,
  porcao,
  preco,
}: Omit<PratoType, "id">) => {
  const [modal, setModal] = useState(false);

  const getDescricao = (descricao: string) => {
    if (descricao.length > 165) {
      return descricao.slice(0, 165) + "...";
    }
    return descricao;
  };

  const getPreco = (preco: number) => {
    let precoFormatado = preco.toString(10)
    if(precoFormatado.indexOf('.') == precoFormatado.length - 2) {
      precoFormatado = precoFormatado.concat('0')
    }
    return precoFormatado.replace('.', ',');
  };

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if(event.target === event.currentTarget) {
      setModal(false)
    }
  }

  return (
    <>
      <CardStyle>
        <ImageStyle src={foto} />
        <CardTitle>{nome}</CardTitle>
        <CardDescription>{getDescricao(descricao)}</CardDescription>
        <Button onClick={() => setModal(!modal)}>Mais detalhes</Button>
      </CardStyle>
      <Modal isActive={modal} onClick={handleOutsideClick}>
        <ModalContainer>
          <ModalImage src={foto} />
          <ModalContent>
            <BotaoFechar onClick={() => setModal(false)}>
              <img src={Fechar} alt="" />
            </BotaoFechar>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <Button>Adicionar ao carrinho - R$ {getPreco(preco)}</Button>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ItemCard;
