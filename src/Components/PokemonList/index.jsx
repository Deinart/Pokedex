import { useContext } from 'react';
import { CodeDistribuitor } from '../../Context';
import BtnInfoPokemon from '../BtnInfoPokemon';
import { BoxSearch } from '../BoxSearch';

export function PokemonList () {

  const context = useContext(CodeDistribuitor)

  return (
    <div className='relative h-full overflow-y-scroll'>
      <div className='relative flex items-center justify-center w-full h-30 mb-7 bg-[#E01B1B]'>
        <div className='bg-[#222224] py-3 px-4 rounded-full'>
          <h2 className='text-white text-2xl font-bold'>
            Pokemon List
          </h2>
        </div>
        <div className='absolute flex justify-center items-center p-1 size-10 bottom-4 left-4 bg-[#222224] rounded-full'>
          <p className='text-[#FF9D00] flex font-mono font-bold text-md'>
            {
              context.filteredPokemons ? context.filteredPokemons.length : context.pokeInformation.length
            }
          </p>
        </div>
      </div>
      <BoxSearch />
      <div>
        {
          context.filteredPokemons?.map(item => (
            <BtnInfoPokemon key={item.number} data={item} />
          ))
        }
      </div>
    </div>
  )
}