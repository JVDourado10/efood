import { useParams } from "react-router-dom"

// import { restaurants } from "../Home"
import ItemCard from "../../components/ItemCard"
import { Banner, BannerBackground, Container, Tag, Title } from "./styles"
import { RestaurantType } from "../Home";




const Restaurant = ({restaurants}: {restaurants: RestaurantType[]}) => {
  const {id} = useParams()
  
  if (id) {
   const idNumber = +id - 1
   if(typeof idNumber === 'number') {
     const show = restaurants[idNumber]
     
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
              <ItemCard nome={item.nome} descricao={item.descricao} foto={item.foto} porcao={item.porcao} preco={item.preco} />
            ))}
          </Container>
        </>
     )
   }
  }
}

export default Restaurant