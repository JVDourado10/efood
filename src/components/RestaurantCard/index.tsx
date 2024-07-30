import Star from '../../assets/star.svg'
import { RCardStyle, Infos, CardTitle, Description, ButtonLink, Tags, Tag } from './styles'

import Restaurant from '../../models/Restaurant'

const RestaurantCard = ({description, image, rate, title, id, tags }: Restaurant) => {
  return (
    <RCardStyle>
      <img src={image} />
      <Infos>
        <div>
          <CardTitle>{title} </CardTitle>
          <div>
            <CardTitle>{rate}</CardTitle>
            <img src={Star} />
          </div>
        </div>
        <Description>{description}</Description>
        <ButtonLink to={`/restaurante/${id}`}>Saiba Mais</ButtonLink>
      </Infos>
      <Tags>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
    </RCardStyle>
  )
}

export default RestaurantCard