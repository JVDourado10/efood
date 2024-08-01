import { Button, CardDescription, CardStyle, CardTitle, ImageStyle } from "./styles"

const ItemCard = ({ name, description, image }: {name: string, description: string, image: string}) => {
  return (
    <CardStyle>
      <ImageStyle src={image}/>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Button>Adicionar ao carrinho</Button>
    </CardStyle>
  )
}

export default ItemCard