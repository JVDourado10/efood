import Restaurant from "../../models/Restaurant";
import RestaurantCard from "../RestaurantCard";
import { RestaurantsSection } from "./styles";

const Restaurants = ({
  restaurants,
}: {
  restaurants: Omit<Restaurant[], "items">;
}) => {
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
  );
};

export default Restaurants;
