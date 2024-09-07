import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const RCardStyle = styled.div`
  background-color: ${cores.white};
  width: 472px;
  height: 400px;
  display: grid;
  color: ${cores.main};
  grid-template-rows: 217px auto;
  position: relative;
`

export const Capa = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


export const Tags = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  right: 16px;
  top: 16px;
`

export const Tag = styled.span`
  background-color: ${cores.main};
  color: ${cores.white};
  padding: 6px 8px;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${cores.main};
  border-top: none;
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    margin-left: 8px;
  }
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const ButtonLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${cores.white};
  background-color: ${cores.main};
  padding: 4px 6px;
  align-self: flex-start;

`