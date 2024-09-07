import RestaurantCard from "../RestaurantCard";
import { RestaurantsSection } from "./styles";

import { RestaurantType } from "../../pages/Home";

const Restaurants = ({
  restaurants,
}: {
  restaurants: Omit<RestaurantType[], "cardapio" | 'destacado'>;
}) => {
  return (
    <RestaurantsSection className="container">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          titulo={restaurant.titulo}
          descricao={restaurant.descricao}
          capa={restaurant.capa}
          avaliacao={restaurant.avaliacao}
          id={restaurant.id}
          tipo={restaurant.tipo}
        />
      ))}
    </RestaurantsSection>
  );
};

export default Restaurants;
