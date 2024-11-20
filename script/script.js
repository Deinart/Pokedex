const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
  .then((response) => response.json())
  .then((data) => {
    const pokeData = data.results.map((pokemon) => {
      return {
        name : pokemon.name,
        url:pokemon.url
      };
    });
    return pokeData;
  })
  .then((pokemons) => {
    const pokemonData = pokemons.map((pokemon) => {
      return fetch (pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          return {
            name: data.name,
            sprite: data.sprites.front_default,
            type: data.types.map((type) => type.type.name),
            abilities: data.abilities.map((ability) => ability. ability.name),
            height: data.height,
            weight: data.weight,
          };
        });
    });
    return Promise.all(pokemonData);
  })
  .catch((error) => console.log(error));

const containerDex1 = document.createElement('section');
containerDex1.setAttribute('id', 'container-primary');
document.getElementById('screen-dex').appendChild(containerDex1);

pokemons.then((pokemonList) => {
  pokemonList.forEach((pokemon) => {
    const pokemonDiv = document.createElement('div');
    
    pokemonDiv.classList.add('pokemon-card');
    
    pokemonDiv.innerHTML = `
    <div class="container-img">
      <img src=${pokemon.sprite} alt=${pokemon.name}>
    </div>
    <div class="container-ball"></div>
    <div class="container-name">
      <h3>${pokemon.name}</h3>
    </div>
    `;
    
    containerDex1.appendChild(pokemonDiv);
  });
})



