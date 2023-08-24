function Pokemon(data, callback) {
  let url = data.url;
  fetch(data.url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      callback({
        url,
        name: data.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        types: data.types.map((el) => el.type.name),
        stats: data.stats.map((el) => {
          return {
            name: el.stat.name,
            base_stat: el.base_stat,
          };
        }),
        moves: data.moves.map((el) => el.move.name),
        abilities: data.abilities.map((el) => el.ability.name),
        id: data.id,
      });
    })
    .catch((err) => console.error(err));
}

export default Pokemon;
