import { useParams } from "react-router-dom"

import ItemCard from "../../components/ItemCard"
import { Banner, BannerBackground, Container, Tag, Title } from "./styles"
import { useGetItemQuery } from "../../services/api";




const Restaurant = () => {
  const {id} = useParams()
  
  const { data: show } = useGetItemQuery(id!)
  if (show) {
     return (
        <>
          <BannerBackground image={show.capa}>
            <Banner>
              <div className="container">
                <Tag>{show.tipo}</Tag>
                <Title>{show.titulo}</Title>
              </div>
            </Banner>
          </BannerBackground>
        
          <Container className="container">
            {show.cardapio.map(item => (
              <ItemCard item={item} />
            ))}
          </Container>
        </>
     )
  }
}

export default Restaurant