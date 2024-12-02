import styled from "styled-components";
import { cores } from "../../styles";



export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.main};
  width: 380px;
  z-index: 1;
  color: ${cores.main};
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Entrega = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px 30px;

  h3 {
    color: ${cores.background};
    font-size: 16px;
    line-height: 18.75px;
  }

  * {
    grid-column: 1/-1;
    max-width: 364px;
  }

  p {
    color: ${cores.background};
    margin-bottom: 24px;
  }
`

export const Botoes = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 16px;
`

export const OverlayCarrinho = styled.div`
  display: grid;
  height: 100%;

  p {
    color: ${cores.background};
    text-align: center;
    align-self: center;
    justify-self: center;
    font-weight: bold;
  }

  img {
    position: absolute;
    justify-self: center;
    top: 35%;
    opacity: 50%;
    width: 100px;
  }
`

export const DivTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`

export const Button = styled.button`
  background-color: ${cores.background};
  color: ${cores.main};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 0;
  border: none;
  cursor: pointer;
`

export const Total = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16.41px; 
  color: ${cores.background};
`

export const Itens = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Item = styled.li`
  background-color: ${cores.background};
  display: grid;
  grid-template-columns: 80px auto;
  padding: 8px;
  gap: 8px;
  position: relative;

  div {
    display: grid;
  }

`

export const Remover = styled.img`
  position: absolute;
  height: 16px;
  width: 16px;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const Imagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`