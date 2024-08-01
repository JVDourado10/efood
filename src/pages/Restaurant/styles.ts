import styled from "styled-components";

type BannerProps = {
  image: string
}

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 60px 0 120px 0;
`

export const BannerBackground = styled.div<BannerProps>`
  height: 280px;
  background: url(${(props => props.image)}) no-repeat ;
  background-size: cover;
  background-position: 0%;
  position: relative;
`

export const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`

export const Tag = styled.span`
  font-weight: 100;
  font-size: 32px;
  position: absolute;
  top: 24px;
`

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 200px;
  position: absolute;
  bottom: 32px;
`