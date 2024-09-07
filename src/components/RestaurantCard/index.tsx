import Star from '../../assets/star.svg'
import { RCardStyle, Infos, CardTitle, Description, ButtonLink, Tags, Tag, Capa } from './styles'

import { RestaurantType } from '../../pages/Home'

const RestaurantCard = ({id, avaliacao, capa, descricao, tipo, titulo }: Omit<RestaurantType, 'cardapio' | 'destacado'>) => {
  return (
    <RCardStyle>
      <Capa src={capa} />
      <Infos>
        <div>
          <CardTitle>{titulo} </CardTitle>
          <div>
            <CardTitle>{avaliacao}</CardTitle>
            <img src={Star} />
          </div>
        </div>
        <Description>{descricao}</Description>
        <ButtonLink to={`/restaurante/${id}`}>Saiba Mais</ButtonLink>
      </Infos>
      <Tags>
          <Tag>{tipo}</Tag>
      </Tags>
    </RCardStyle>
  )
}

export default RestaurantCard