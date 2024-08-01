import styled from "styled-components";
import { cores } from "../../styles";

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