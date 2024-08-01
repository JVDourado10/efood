import { useParams } from "react-router-dom"

import { restaurants } from "../Home"
import ItemCard from "../../components/ItemCard"
import { Banner, BannerBackground, Container, Tag, Title } from "./styles"




const Restaurant = () => {
  const {id} = useParams()
  if (id) {
   const idNumber = +id
   if(typeof idNumber === 'number') {
     const show = restaurants[idNumber]
     
     return (
        <>
          <BannerBackground image={show.image}>
            <Banner>
              <div className="container">
                <Tag>{show.tags[0]}</Tag>
                <Title>{show.title}</Title>
              </div>
            </Banner>
          </BannerBackground>
        
          <Container className="container">
            {show.items.map(item => (
              <ItemCard name={item.name} description={item.itemDescription} image={item.itemImage} />
            ))}
          </Container>
        </>
     )
   }
  }
}

export default Restaurant