const PokemonItem = (el) => {
  const { name, img, types, id } = el;

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

  return `
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
                acerca
              </div>
              <div class="tab" id="base">
                base
              </div>
              <div class="tab" id="evolution">
                evolucion
              </div>
              <div class="tab" id="moves">
                movimientos
              </div>
            </div>
          </div>
  `;
};

export default PokemonItem;
