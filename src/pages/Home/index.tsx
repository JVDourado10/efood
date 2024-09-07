import Restaurants from "../../components/Restaurants";

export type PratoType = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type RestaurantType = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: PratoType[];
};

const Home = ({restaurants}: {restaurants: RestaurantType[]}) => {

  return <Restaurants restaurants={restaurants} />;
};

export default Home;
