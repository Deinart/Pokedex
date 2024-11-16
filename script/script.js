
const  pokemones = [
    {
      numero: 1,
      nombre: "Bulbasaur",
      sprite: 'bulbasaur.png',
      tipo: ["Planta", "Veneno"],
      color: "Verde",
      habilidad: "Espesura"
    },
    {
      numero: 2,
      nombre: "Ivysaur",
      sprite: 'ivysaur.png',
      tipo: ["Planta", "Veneno"],
      color: "Verde",
      habilidad: "Espesura"
    },
    {
      numero: 3,
      nombre: "Venusaur",
      sprite: "venusaur-f.png",
      tipo: ["Planta", "Veneno"],
      color: "Verde",
      habilidad: "Espesura"
    },
    {
      numero: 4,
      nombre: "Charmander",
      sprite: "charmander.png",
      tipo: ["Fuego"],
      color: "Naranja",
      habilidad: "Mar Llamas"
    },
    {
      numero: 5,
      nombre: "Charmeleon",
      sprite: "charmeleon.png",
      tipo: ["Fuego"],
      color: "Naranja",
      habilidad: "Mar Llamas"
    },
    {
      numero: 6,
      nombre: "Charizard",
      tipo: ["Fuego", "Volador"],
      sprite: "charizard.png",
      color: "Naranja",
      habilidad: "Mar Llamas"
    },
    {
      numero: 7,
      nombre: "Squirtle",
      sprite: "squirtle.png",
      tipo: ["Agua"],
      color: "Azul",
      habilidad: "Torrente"
    },
    {
      numero: 8,
      nombre: "Wartortle",
      sprite: "wartortle.png", 
      tipo: ["Agua"],
      color: "Azul",
      habilidad: "Torrente"
    },
    {
      numero: 9,
      nombre: "Blastoise",
      sprite: "blastoise.png",
      tipo: ["Agua"],
      color: "Azul",
      habilidad: "Torrente"
    },
    {
      numero: 10,
      nombre: "Caterpie",
      sprite: "caterpie.png",
      tipo: ["Bicho"],
      color: "Verde",
      habilidad: "Polvo Escudo"
    },
    {
      numero: 11,
      nombre: "Metapod",
      sprite: "metapod.png",
      tipo: ["Bicho"],
      color: "Verde",
      habilidad: "Mudar"
    },
    {
      numero: 12,
      nombre: "Butterfree",
      sprite: "butterfree.png",
      tipo: ["Bicho", "Volador"],
      color: "Blanco",
      habilidad: "Ojo Compuesto"
    },
    {
      numero: 13,
      nombre: "Weedle",
      sprite: "weedle.png",
      tipo: ["Bicho", "Veneno"],
      color: "Marrón",
      habilidad: "Polvo Escudo"
    },
    {
      numero: 14,
      nombre: "Kakuna",
      sprite: "kakuna.png",
      tipo: ["Bicho", "Veneno"],
      color: "Amarillo",
      habilidad: "Mudar"
    },
    {
      numero: 15,
      nombre: "Beedrill",
      sprite: "beedrill.png",
      tipo: ["Bicho", "Veneno"],
      color: "Amarillo",
      habilidad: "Enjambre"
    },
    {
      numero: 16,
      nombre: "Pidgey",
      sprite: "pidgey.png",
      tipo: ["Normal", "Volador"],
      color: "Marrón",
      habilidad: "Vista Lince"
    },
    {
      numero: 17,
      nombre: "Pidgeotto",
      sprite: "pidgeotto.png",
      tipo: ["Normal", "Volador"],
      color: "Marrón",
      habilidad: "Vista Lince"
    },
    {
      numero: 18,
      nombre: "Pidgeot",
      sprite: "pidgeot.png",
      tipo: ["Normal", "Volador"],
      color: "Marrón",
      habilidad: "Vista Lince"
    },
    {
      numero: 19,
      nombre: "Rattata",
      sprite: "rattata-f.png",
      tipo: ["Normal"],
      color: "Púrpura",
      habilidad: "Fuga"
    },
    {
      numero: 20,
      nombre: "Raticate",
      sprite: "raticate.png",
      tipo: ["Normal"],
      color: "Marrón",
      habilidad: "Fuga"
    },
    {
      numero: 21,
      nombre: "Spearow",
      sprite: "spearow.png",
      tipo: ["Normal", "Volador"],
      color: "Marrón",
      habilidad: "Vista Lince"
    },
    {
      numero: 22,
      nombre: "Fearow",
      sprite: "fearow.png",
      tipo: ["Normal", "Volador"],
      color: "Marrón",
      habilidad: "Vista Lince"
    },
    {
      numero: 23,
      nombre: "Ekans",
      sprite: "ekans.png",
      tipo: ["Veneno"],
      color: "Púrpura",
      habilidad: "Mudar"
    },
    {
      numero: 24,
      nombre: "Arbok",
      sprite: "arbok.png",
      tipo: ["Veneno"],
      color: "Púrpura",
      habilidad: "Mudar"
    },
    {
      numero: 25,
      nombre: "Pikachu",
      sprite: "pikachu.png",
      tipo: ["Eléctrico"],
      color: "Amarillo",
      habilidad: "Electricidad estática"
    },
    {
      numero: 26,
      nombre: "Raichu",
      sprite: "raichu.png",
      tipo: ["Eléctrico"],
      color: "Amarillo",
      habilidad: "Electricidad estática"
    }
    

];


const containerDex1 = document.createElement('section');
containerDex1.setAttribute('id', 'container-primary');
document.getElementById('screen-dex').appendChild(containerDex1);

pokemones.forEach(pokemon => {
  const pokemonDiv = document.createElement('div');

  pokemonDiv.classList.add('pokemon');

  pokemonDiv.innerHTML = `
    <div class="container-img">
      <img src=./assets/${pokemon.sprite} alt=${pokemon.nombre}>
    </div>
    <div class="container-ball"></div>
    <div class="container-name">
      <h3>${pokemon.nombre}</h3>
    </div>
  `;

  containerDex1.appendChild(pokemonDiv);
})



