import styled from "styled-components";
import { cores } from "../../styles";

type Props = {
  isActive: boolean
}

export const CardStyle = styled.div`
  height: 338px;
  width: 320px;
  color: ${cores.s_background};
  background-color: ${cores.main};
  padding: 8px;
  display: grid;
  gap: 8px;
`

export const CardTitle = styled.h3`
  font-weight: 900;
  font-size: 16px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  
`

export const Modal= styled.div<Props>`
  display: ${(props) => props.isActive ? 'grid' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const BotaoFechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 280px auto;
  margin-right: 15px;
  padding: 32px;
  gap: 24px;
  width: 1024px;
  background-color: ${cores.main};
  z-index: 100;
`

export const ModalContent = styled.div`
  display: grid;
  grid-template-rows: repeat(4, min-content);
  align-items: start;
  justify-content: start;
  gap: 16px;

  & button {
    justify-self: start;
  }
`

export const ModalImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`


export const ImageStyle = styled.img`
  height: 167px;
  width: 304px;
`

export const Button = styled.button`
  background-color: ${cores.s_background};
  color: ${cores.main};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  line-height: 16px;
`