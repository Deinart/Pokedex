import { useContext } from 'react'
import { CodeDistribuitor } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'


export default function BoxInformation() {
  const context = useContext(CodeDistribuitor)

  return (
    <div 
      className={`absolute ${context.isPokeInfoOpen ? 'flex' : 'hidden'} flex-col items-center w-full h-screen z-20 bg-[#D9D9D9]`} 
    >
      <div className='flex items-center justify-center w-full h-55 bg-[#222224]'>
        <img
          src={context.dataPokemon.img_pokemon} alt={context.dataPokemon.name} 
          className='size-40'
        />
      </div>
      <div>
        <h2>
          {context.dataPokemon.name}
        </h2>
      </div>
      <div 
        className='flex items-center justify-center absolute bottom-6 right-6 size-15 bg-[#f0eded] active:bg-[#e72b2b] active:text-white rounded-full'
        onClick={() => context.closePokeInformation()}
      >
        <XMarkIcon
          className='size-11'
        />
      </div>
    </div>
  )
}