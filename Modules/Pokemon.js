function Pokemon(data, callback) {
  let url = data.url;

  const getData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  fetch(data.url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then(async (data) => {
      callback({
        url,
        name: data.name.replace("-", " "),
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
        speces: await getData(data.species.url),
        weigth: data.weight,
        height: data.height,
      });
    })
    .catch((err) => console.error(err));
}

export default Pokemon;
