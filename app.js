"use strict";
import PokemonItem from "./Components/PokemonItem.js";
import Tags from "./Components/Tags.js";
import Pokedex from "./Modules/Pokedex.js";
import Pokemon from "./Modules/Pokemon.js";

const content = document.querySelector("#contenedor");
const { initTags, resetTags, initEventsTags } = Tags();
const { dibujarPokedex } = Pokedex();

document.addEventListener("DOMContentLoaded", function () {
  dibujarPokedex();
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".item") || e.target.matches(".item *")) {
    let url =
      e.target.dataset.url ||
      e.target.parentElement.dataset.url ||
      e.target.parentElement.parentElement.dataset.url ||
      e.target.parentElement.parentElement.parentElement.dataset.url;

    Pokemon({ url }, (pokemon) => {
      let pokemonContent = document.querySelector(".pokemon");
      pokemonContent.querySelector(".content").remove();
      pokemonContent.innerHTML += PokemonItem(pokemon);
      initTags();
      content.classList.add("active");
      content.classList.remove("not-active");
    });
  }

  if (e.target.matches(".back") || e.target.matches(".mask")) {
    content.classList.remove("active");
    content.classList.add("not-active");
    document.querySelector(".pokemon").scrollTop = 0;
    resetTags();
  }

  if (e.target.matches(".nav-items a")) {
    e.preventDefault();
    initEventsTags(e);
  }
});
