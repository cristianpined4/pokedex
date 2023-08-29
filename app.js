"use strict";
import FilterSearch from "./Components/FilterSearch.js";
import PokemonItem from "./Components/PokemonItem.js";
import Tags from "./Components/Tags.js";
import Pokedex from "./Modules/Pokedex.js";
import Pokemon from "./Modules/Pokemon.js";

const content = document.querySelector("#contenedor");
const { initTags, resetTags, initEventsTags } = Tags();
const { dibujarPokedex } = Pokedex();

const getFavorites = (id) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [],
    pokemon = favorites.find((pokemon) => pokemon.id == id);
  return pokemon ? true : false;
};

document.addEventListener("DOMContentLoaded", function () {
  dibujarPokedex();
  FilterSearch("#filter", ".list .grid .item");
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
      document.querySelector(".favorite").id = pokemon.id;
      if (getFavorites(pokemon.id)) {
        document.querySelector(".favorite").classList.add("active");
      } else {
        document.querySelector(".favorite").classList.remove("active");
      }
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

  if (e.target.matches(".favorite")) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let id = e.target.id;

    let pokemon = favorites.find((pokemon) => pokemon.id == id);
    if (pokemon) {
      favorites = favorites.filter((pokemon) => pokemon.id != id);
      e.target.classList.remove("active");
    }
    if (!pokemon) {
      favorites.push({ id });
      e.target.classList.add("active");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  if (e.target.matches("#filtrarFavoritos")) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      let items = document.querySelectorAll(".list .grid .item");
      items.forEach((item) => item.classList.remove("filter"));
    } else {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      let items = document.querySelectorAll(".list .grid .item");
      items.forEach((item) => {
        let id = item.id;
        let pokemon = favorites.find((pokemon) => pokemon.id == id);
        if (pokemon) {
          item.classList.remove("filter");
        } else {
          item.classList.add("filter");
        }
      });
      e.target.classList.add("active");
    }
  }
});
