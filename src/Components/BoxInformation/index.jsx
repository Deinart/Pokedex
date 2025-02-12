import { useContext } from 'react'
import { CodeDistribuitor } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'


export default function BoxInformation() {
  const context = useContext(CodeDistribuitor)

  function closeInformationPoke()  {
    context.closePokeInformation()
    context.setDataPokemon([])
    context.setNamePokemon(null)
  }
  

  function typeEleccion(type) {
    if (type === 'normal') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-gray-500'>Normal</p>)
    } else if (type === 'fire') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-orange-600'>Fire</p>)
    } else if (type === 'water') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-blue-600'>Water</p>)
    } else if(type === 'grass') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-green-500'>Grass</p>)
    } else if (type === 'electric') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-yellow-400'>Electric</p>)
    } else if (type === 'ice') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-cyan-400'>Ice</p>)
    } else if (type === 'fighting') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-red-800'>Fighting</p>)
    } else if (type === 'poison') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-purple-600'>Poison</p>)
    } else if (type === 'ground') {
      return (<p className='font-semibold text-md text-neutral-900 px-3 py-1 rounded-lg bg-amber-300'>Ground</p>)
    } else if (type === 'flying') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-sky-500'>Flying</p>)
    } else if (type === 'psychic') { 
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-pink-500'>Psychic</p>)
    } else if (type === 'bug') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-lime-600'>Bug</p>)
    } else if (type === 'rock') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-yellow-700'>Rock</p>)
    } else if (type === 'ghost') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-indigo-700'>Ghost</p>)
    } else if (type === 'dragon') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-indigo-800'>Dragon</p>)
    } else if (type === 'dark') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-neutral-700'>Dark</p>)
    } else if (type === 'steel') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-slate-700'>Steel</p>)
    } else if (type === 'fairy') {
      return (<p className='font-semibold text-md text-white px-3 py-1 rounded-lg bg-pink-300'>Fairy</p>)
    }  else {
      console.log('no se encuentra el tipo')
    }
  }

  return (
    <div 
      className={`absolute ${context.isPokeInfoOpen ? 'flex' : 'hidden'} flex-col items-center w-full h-screen z-20 bg-[#222224]`} 
    >
      <div className='flex items-center justify-center w-full py-5 bg-[#222224]'>
        <img
          src={context.dataPokemon.img_pokemon} alt={context.dataPokemon.name} 
          className='size-40 p-4 bg-[#D9D9D9] rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.8)]'
        />
      </div>
      <div 
        className='flex flex-col items-center w-full h-full py-3 bg-[#D9D9D9] shadow-[0_0_10px_rgba(0,0,0,0.8)]'
      >
        <div className='pb-4'>
          <h2 className='text-2xl font-semibold text-[#151515]'>{context.namePokemon}</h2>
        </div>
        <div className='flex flex-col items-center p-3 rounded-2xl bg-[#222224]'>
          <p className='font-semibold text-lg text-white mb-2'>TYPES</p>
          <div className='flex items-center justify-center gap-3'>  
            {context.typesPokemon?.map((type, index) => <div key={index}>{typeEleccion(type)}</div>)}
          </div>
        </div>
      </div>
      <div 
        className='flex items-center justify-center fixed bottom-6 right-6 size-14 bg-[#f0eded] hover:bg-[#e72b2b] hover:text-white rounded-full shadow-[0_0_7px_rgba(0,0,0,0.4)]'
        onClick={() => closeInformationPoke()}
      >
        <XMarkIcon
          className='size-10'
        />
      </div>
    </div>
  )
}