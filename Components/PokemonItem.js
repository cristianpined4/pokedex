const PokemonItem = (el) => {
  const { name, img, types, id, weigth, height, abilities, speces } = el;

  const zerofill = (value, length) => {
    return value.toString().length < length
      ? zerofill("0" + value, length)
      : value;
  };

  const getTypes = () => {
    let text = "";
    types.forEach((type) => {
      text += `<div class="type">${type}</div>`;
    });
    return text;
  };

  const getAbilities = () => {
    let text = "";
    abilities.forEach((ability) => {
      text += `${ability}, `;
    });
    text = text.slice(0, -2);
    return text;
  };

  const speceName = speces.genera.find((sp) => sp.language.name === "en")
    ? speces.genera.find((sp) => sp.language.name === "en").genus
    : "No name";

  const getEggGroups = () => {
    let text = "";
    speces.egg_groups.forEach((egg) => {
      text += `${egg.name}, `;
    });
    text = text.slice(0, -2);
    return text;
  };

  return /* html */ `
    <div class="content ${types[0]}">
            <div class="about">
              <div>
                <h3>${name}</h3>
                <div class="types">
                  ${getTypes()}
                </div>
              </div>
              <span>#${zerofill(id, 3)}</span>
            </div>
            <img
              src="${img}"
              alt="${name}">
            <div class="info tags">
              <nav class="nav-items">
                <a href="#about">About</a>
                <a href="#base">Base Stats</a>
                <a href="#evolution">Evolution</a>
                <a href="#moves">Moves</a>
              </nav>
              <div class="tab" id="about">
                <table>
                  <tbody>
                    <tr>
                      <td>Species</td>
                      <td>${speceName}</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>${height / 100} m</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>${weigth / 1000} kg</td>
                    </tr>
                    <tr>
                      <td>Abilities</td>
                      <td>${getAbilities()}</td>
                    </tr>
                  </tbody>
                </table>
                <h5>Breeding</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Egg Groups</td>
                      <td>${getEggGroups()}</td>
                    </tr>
                    <tr>
                      <td>Egg Cycle</td>
                      <td>${types[0]}</td>
                     </tr>
                  </tbody>
                </table>
              </div>
              <div class="tab" id="base">
                base
              </div>
               <div class="tab" id="evolution">
                evolution
              </div>
              <div class="tab" id="moves">
                movimientos
              </div>
            </div>
          </div>
  `;
};

export default PokemonItem;
