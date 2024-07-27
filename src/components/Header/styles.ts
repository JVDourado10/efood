import styled from "styled-components";
import { cores } from "../../styles";
import { Props } from ".";
import detail from '../../assets/detail.svg'



export const HeaderStyle = styled.header<Props>`
  background-image: url(${detail});
  color: ${cores.main};
  padding: 40px 0 60px 0;
  
  > div {
    display: flex;
    justify-content: ${(props) => props.teste ? 'space-between' : 'center'};
    align-items: center;
    flex-direction: ${(props) => props.teste ? 'line' : 'column'};

    h1 {
      font-weight: 900;
      font-size: 36px;
      margin-top: 140px;
    }

    h2 {
      font-size: 18px;
      font-weight: 900;
    }

  }
`