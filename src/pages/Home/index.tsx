import Sushi from "../../assets/r_sushi.png";
import Pasta from "../../assets/r_pasta.png";
import Hamburguer from "../../assets/r_hamburguer.png";
import Pizza from "../../assets/r_pizza.png";
import Shawarma from "../../assets/r_shawarma.png";
import Salada from "../../assets/r_salada.png";

// import Restaurant from "../../models/Restaurant";

import Restaurants from "../../components/Restaurants";

const Home = () => {
  const restaurants = [
    {
      id: 1,
      title: "Hioki Sushi",
      rate: 4.9,
      description:
        "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
      image: Sushi,
      tags: ["Destaque da semana", "Japonesa"],
    },
    {
      id: 2,
      title: "La Dolce Vita Trattoria",
      rate: 4.8,
      description:
        "Peça já o melhor da culinária italiana no conforto da sua casa! Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a Italia sem sair do lar com nosso delivery!",
      image: Pasta,
      tags: ["Italiana", "Massas"],
    },
    {
      id: 3,
      title: "BAMBurgueria",
      rate: 5.0,
      description:
        "Peça já o melhor hamburguer no conforto da sua casa! Entrega rápida, embalagens cuidadosas e qualidade garantida.",
      image: Hamburguer,
      tags: ["Hamburguer"],
    },
    {
      id: 4,
      title: "Plimzaria",
      rate: 4.4,
      description:
        "Peça já a melhor pizza no conforto da sua casa! Entrega rápida, embalagens cuidadosas e qualidade garantida.",
      image: Pizza,
      tags: ["Pizza"],
    },
    {
      id: 5,
      title: "Showarma",
      rate: 4.7,
      description:
        "Peça já o melhor da culinária árabe no conforto da sua casa! Entrega rápida, embalagens cuidadosas e qualidade garantida.",
      image: Shawarma,
      tags: ["Lanche"],
    },
    {
      id: 6,
      title: "Salados",
      rate: 4.9,
      description:
        "Peça já a melhor salada no conforto da sua casa! Entrega rápida, embalagens cuidadosas e qualidade garantida.",
      image: Salada,
      tags: ["Fit"],
    },
  ];

  console.log('salve')
  console.log(restaurants)

  return (
  <Restaurants restaurants={restaurants} />
)}

export default Home;
