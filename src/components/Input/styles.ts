import styled from "styled-components";
import { cores } from "../../styles";

export const Label = styled.label`
  color: ${cores.background};
  font-size: 14px;
  font-weight: bold;
  position: relative
`

export const Caixa = styled.input`
  padding: 8px;
  background-color: ${cores.background};
  border: 1px solid ${cores.background};
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Erro = styled.small`
  color: #222;
`