const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=45')
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

// show all the pokemonList
pokemons.then((pokemonList) => {
  // generates a card for each pokemon
  pokemonList.forEach((pokemon) => {
    let pokemonCard = document.createElement('div');
    pokemonCard.setAttribute('id', 'pokemon-card');
    
    pokemonCard.innerHTML = `
    <div class="container-img">
      <img src=${pokemon.sprite} alt=${pokemon.name}>
    </div>
    <div class="container-ball"></div>
    <div class="container-name">
      <h3 id="poke-name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
    </div>
    `;
    containerDex1.appendChild(pokemonCard);

    //  show the infoCard
    pokemonCard.addEventListener('click', (e) => {
      document.body.style = `overflow: hidden;`
      infoCard.innerHTML = `
      <div>
        <img src="${pokemon.sprite}" alt="${pokemon.name}"/>
      </div>
      <h2>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
      <p>${pokemon.number}</p>
      <button id="btn-close-card">X</button>
      `;
         
      containerDex2.style = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      `;

      containerDex2.appendChild(infoCard);

      const btnCloseCard = infoCard.querySelector('#btn-close-card');
      
      btnCloseCard.addEventListener('click', () => {
        containerDex2.removeChild(infoCard);
        containerDex2.style = '';
        document.body.style = '';
      });
    });
  });

});

// container section for the pokemon list
const containerDex1 = document.createElement('section');
containerDex1.setAttribute('id', 'container-primary');
document.getElementById('screen-dex').appendChild(containerDex1);
  
// pokemon information container
const containerDex2 = document.createElement('section');
containerDex2.setAttribute('id', 'container-secondary');
document.getElementById('screen-dex').appendChild(containerDex2);
    
// infoCard element container
const infoCard = document.createElement('div');
infoCard.setAttribute('id', 'info-card');


//? the input search for pokemons
window.addEventListener('load', ()=> {
  const inputSearch = document.getElementById('search-pokemon');

  inputSearch.addEventListener('keyup', () => {
    const pokeNames = containerDex1.querySelectorAll('#poke-name');
    const callPoke = inputSearch.value.toLowerCase(); 
    
    Array.from(pokeNames).forEach((pokemon) => {
      if (pokemon.textContent.toLowerCase().includes(callPoke)) {
        pokemon.style.display = 'flex';
      } else {
        pokemon.style.display = 'none';
      }
    })
  });
})

