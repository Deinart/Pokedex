import { useContext, useEffect } from 'react'
import { CodeDistribuitor } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'


export default function BoxInformation() {
  const context = useContext(CodeDistribuitor)

  return (
    <div 
      className={`absolute ${context.isPokeInfoOpen ? 'flex' : 'hidden'} flex-col items-center w-full h-screen z-20 bg-[#D9D9D9]`} 
    >
      <div className='flex items-center justify-center w-full h-50 bg-[#222224]'>
        <img
          src={context.dataPokemon.img_pokemon} alt={context.dataPokemon.name} 
          className='px-10'
        />
      </div>
      <div>
        <h2>
          {context.dataPokemon.name}
        </h2>
      </div>
      <div 
        className='flex items-center justify-center fixed bottom-6 right-6 size-14 bg-[#f0eded] active:bg-[#e72b2b] active:text-white rounded-full shadow-[0_0_7px_rgba(0,0,0,0.4)]'
        onClick={() => context.closePokeInformation()}
      >
        <XMarkIcon
          className='size-10'
        />
      </div>
    </div>
  )
}