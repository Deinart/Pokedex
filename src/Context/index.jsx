import { createContext, useEffect, useState }  from 'react'

export const CodeDistribuitor = createContext();

export const CodeProvider = ({ children }) => {
  // Open and close information about the selected pokemon
  const [isPokeInfoOpen, setIsPokeInfoOpen] = useState(false)
  const openPokeInformation = () => setIsPokeInfoOpen(true)
  const closePokeInformation = () => setIsPokeInfoOpen(false)

  // Information on all pokemons
  const [pokeInformation, setPokeInformation ] = useState([])

  // Information about the selected pokemon
  const [dataPokemon, setDataPokemon] = useState([])

  // Pokemon Name
  const [namePokemon, setNamePokemon] = useState(null)

  // Pokemons Types
  const [typesPokemon, setTypesPokemon] = useState([])

  // Get pokemon
  const [filteredPokemons, setFilteredPokemons] = useState(null)

  // Name pokemon search...
  const [pokeNameSearch, setPokeNameSearch] = useState(null)
  
  // API
  useEffect(() => {
    setTimeout(() => {
      const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
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
                  icon: data.sprites.versions['generation-viii'].icons.front_default,
                  sprite: data.sprites.front_default,
                  img_pokemon: data.sprites.other.dream_world.front_default,
                  types: data.types.map((type) => type.type.name),
                  abilities: data.abilities.map((ability) => ability.ability.name),
                  height: data.height,
                  weight: data.weight,
                };
              });
          });
          return Promise.all(pokemonData);
      })
      pokemons.then((poke) => {
        setPokeInformation(poke)
      })
      .catch((error) => console.log(error))
    }, 1000)
  }, [])

  // useEffect(() => {
    // pokeInformation.map(data => console.log(data.types))
  // }, [dataPokemon])
  
  
  
  const filteredPokemonsByName = (pokemons, searchByTitle) => {
  return pokemons?.filter(pokemon => pokemon.name.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(pokeNameSearch) {
      setFilteredPokemons(filteredPokemonsByName(pokeInformation, pokeNameSearch))
    } else {
      setFilteredPokemons(pokeInformation)
    } 
  }, [pokeInformation, pokeNameSearch])


  return (
    <CodeDistribuitor.Provider value={{
        dataPokemon,
        setDataPokemon,
        pokeInformation,
        isPokeInfoOpen,
        openPokeInformation,
        closePokeInformation,
        pokeNameSearch,
        setPokeNameSearch,
        filteredPokemons,
        namePokemon,
        setNamePokemon,
        typesPokemon,
        setTypesPokemon,
      }} 
    >
      { children }
    </CodeDistribuitor.Provider>
  )
}


