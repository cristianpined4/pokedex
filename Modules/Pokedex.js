import Pokemon from "./Pokemon.js";
import Item from "../Components/Item.js";

const Pokedex = () => {
  const item = (pokemon) => {
    let list = document.querySelector(".list .grid");
    list.appendChild(Item(pokemon));

    let items = document.querySelectorAll(".item");
    items = Array.from(items).sort((a, b) => a.id - b.id);
    list.innerHTML = "";
    items.forEach((el) => list.appendChild(el));
  };

  const dibujarPokedex = async (query = null) => {
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
