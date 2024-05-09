const listPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");

let base_url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(base_url + i)
    .then((response) => response.json())
    .then((data) => mostrarPokemon(data));
}

function mostrarPokemon(pokemon) {
  let id;
  if (pokemon.id < 10) {
    id = `00${pokemon.id}`;
  } else if (pokemon.id > 9 && pokemon.id < 100) {
    id = `0${pokemon.id}`;
  } else {
    id = pokemon.id;
  }

  const name = pokemon.name;
  const height = pokemon.height;
  const weight = pokemon.weight;
  const imgSrc = pokemon.sprites.other["official-artwork"].front_default;

  let tipos = pokemon.types.map(
    (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`
  );

  tipos = tipos.join("");

  const article = document.createElement("article");

  article.classList.add("pokemon");
  article.innerHTML = `<p class="pokemon-id-back">#${id}</p>
  <div class="pokemon-image">
    <img
      src="${imgSrc}"
      alt="Pikachu"
    />
  </div>

  <div class="pokemon-info">
    <div class="nombre-contenedor">
      <p class="pokemon-id">#${id}</p>
      <h2 class="pokemon-nombre">${name}</h2>
    </div>

    <div class="pokemon-tipos">
      ${tipos}
    </div>

    <div class="pokemon-stats">
      <p class="stat">${height} m</p>
      <p class="stat">${weight} kg</p>
    </div>
  </div>`;

  listPokemon.appendChild(article);
}

botonesHeader.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;
    console.log(botonId);
    listPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
      fetch(base_url + i)
        .then((response) => response.json())
        .then((data) => {
          if (botonId === "ver-todos") {
            mostrarPokemon(data);
          } else {
            const tipos = data.types.map((type) => type.type.name);
            if (tipos.some((tipo) => tipo.includes(botonId))) {
              mostrarPokemon(data);
            }
          }
        });
    }
  })
);
