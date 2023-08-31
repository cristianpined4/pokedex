/*!
 * Search Filter 0.0.1
 * Copyright 2020 - Cristian Pineda
 * Licensed under MIT
 */
"use strict";
const style = `<style>/* ----------------- Filter Search ----------------- */.filter{visibility:hidden;opacity:0;order:1}</style>`;

const FilterSearch = (input, selector) => {
  document.head.innerHTML += style;
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      if (e.keyCode === 27 || e.key === "Escape") e.target.value = "";
      document
        .querySelectorAll(selector)
        .forEach((el) =>
          el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? el.classList.remove("filter")
            : el.classList.add("filter")
        );
    }
  });
};

export default FilterSearch;
