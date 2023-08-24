const Item = (el) => {
  const { name, img, types, id } = el;

  const zerofill = (value, length) => {
    return value.toString().length < length
      ? zerofill("0" + value, length)
      : value;
  };

  const item = document.createElement("div");
  item.classList.add("item", types[0]);
  item.id = id;
  item.dataset.url = el.url;

  const image = document.createElement("img");
  image.src = img;
  image.alt = name;

  const about = document.createElement("div");
  about.classList.add("about");

  const h4 = document.createElement("h4");
  h4.textContent = name;

  const extra = document.createElement("div");
  extra.classList.add("extra");

  const span1 = document.createElement("span");
  span1.textContent = types[0];

  const span2 = document.createElement("span");
  span2.textContent = `#${zerofill(id, 3)}`;

  extra.appendChild(span1);
  extra.appendChild(span2);

  about.appendChild(h4);
  about.appendChild(extra);

  item.appendChild(image);
  item.appendChild(about);

  return item;
};

export default Item;
