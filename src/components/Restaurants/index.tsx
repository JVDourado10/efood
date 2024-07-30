import Restaurant from "../../models/Restaurant";
import RestaurantCard from "../RestaurantCard";
import { RestaurantsSection } from "./styles";

export interface Props {
  restaurants: Restaurant[];
}

const Restaurants = ( {restaurants} : {restaurants: Restaurant[]}) => {
  console.log(restaurants)
  
  return (
  <RestaurantsSection className="container">
    {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            image={restaurant.image}
            rate={restaurant.rate}
            id={restaurant.id}
            tags={restaurant.tags}
          />
        ))}
  </RestaurantsSection>
)};

export default Restaurants;
