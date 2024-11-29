const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=62')
  .then((response) => response.json())
  .then((data) => {
    const pokeData = data.results.map((pokemon) => {
      return {
        name: pokemon.name,
        url: pokemon.url
      };
    });
    return pokeData;
  })
  .then((pokemons) => {
    const pokemonData = pokemons.map((pokemon) => {
      return fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          return {
            name: data.name,
            number: data.id,
            sprite: data.sprites.front_default,
            type: data.types.map((type) => type.type.name),
            abilities: data.abilities.map((ability) => ability.ability.name),
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
const containerDex2 = document.createElement('section');
containerDex2.setAttribute('id', 'container-secondary');
document.getElementById('screen-dex').appendChild(containerDex2);

pokemons.then((pokemonList) => {
  pokemonList.forEach((pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.setAttribute('id', 'pokemon-card');
    
    pokemonCard.innerHTML = `
    <div class="container-img">
      <img src=${pokemon.sprite} alt=${pokemon.name}>
    </div>
    <div class="container-ball"></div>
    <div class="container-name">
      <h3>${pokemon.name}</h3>
    </div>
    `;
    
    containerDex1.appendChild(pokemonCard);
    pokemonCard.addEventListener('click',() => {
      const infoCard = document.createElement('div');
      infoCard.setAttribute('id', 'info-card');

      infoCard.innerHTML = `
      <div class="info-card">
        <div><img src="${pokemon.sprite}" alt="${pokemon.name}"/></div>
        <h2>${pokemon.name}</h2>
        <p>${pokemon.number}</p>
      </div>
      `

      containerDex2.style = `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background-color: #00000030;`

        containerDex2.appendChild(infoCard);

        containerDex2.addEventListener('click', () => {
          containerDex2.removeChild(infoCard);
          containerDex2.style = '';
        });
    });


  });
});

  
  


