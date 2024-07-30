import styled from "styled-components";
import { cores } from "../../styles";

export const FooterStyle = styled.footer`
  background-color: ${cores.s_background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 0;

  p {
    color: ${cores.main};
    font-size: 10px;
    max-width: 480px;
    text-align: center;
  }
`

export const SocialMedias = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 50px;
`