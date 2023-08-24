const PokemonItem = (el) => {
  const { name, img, types, id, weigth, height, abilities, speces, stats } = el;

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

  const getStats = () => {
    let text = "",
      contador = 0;
    stats.forEach((stat) => {
      contador += parseInt(stat.point);
      text += `
        <div class="stat">
            <span class="name">${stat.name.replace("-", " ")}</span>
            <div class="value">
              <span>${stat.point}</span>
              <div class="bar">
                <div class="progress" style="width: ${
                  stat.point
                }%;background-color:${
        stat.point <= 50 ? "#c03028" : "#78c850"
      }"></div>
              </div>
            </div>
        </div>
      `;
    });
    text += `
        <div class="stat">
            <span class="name">Total</span>
            <div class="value">
              <span>${contador}</span>
              <div class="bar">
                <div class="progress" style="width: ${
                  contador / stats.length
                }%;background-color:${
      contador / stats.length <= 50 ? "#c03028" : "#78c850"
    }"></div>
              </div>
            </div>
        </div>
      `;
    return text;
  };

  const description = speces.flavor_text_entries
    .find((el) => el.language.name === "en")
    .flavor_text.replace("", " ");

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
                      <td>${height / 10} m</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>${weigth / 10} kg</td>
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
              ${getStats()}
              <h5>Description</h5>
              <p>${description}</p>
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
