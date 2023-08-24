import Pokemon from "./Pokemon.js";
import Item from "../Components/Item.js";

const Pokedex = () => {
  const item = (pokemon) => {
    let list = document.querySelector(".list .grid");
    list.appendChild(Item(pokemon));
  };

  const dibujarPokedex = async () => {
    try {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let data = (await res.ok) ? await res.json() : Promise.reject(res);
      data.results.forEach((element) => {
        Pokemon(element, item);
      });
    } catch (err) {
      console.error(err);
    }
  };
  return { dibujarPokedex };
};

export default Pokedex;
