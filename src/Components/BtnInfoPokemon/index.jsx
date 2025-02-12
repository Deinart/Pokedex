import { useContext } from 'react';
import { CodeDistribuitor } from '../../Context';

export default function BtnInfoPokemon (data) {
  const context = useContext(CodeDistribuitor)

  function sendDataPoke(data) {
    setTimeout(() => context.openPokeInformation(), 400)
    context.setDataPokemon(data)
    context.setNamePokemon(data.name[0].toUpperCase() + data.name.slice(1))
    context.setTypesPokemon(data.types)
    
  }

  return(
    <button
      className='flex items-center justify-between w-full p-3 cursor-pointer bg-[#D9D9D9] hover:bg-[#cfcfcf] active:bg-[#c0bfbf] border-b-1 border-[#222224]'
      onClick={() => sendDataPoke(data.data)}
    >   
      <div className='relative'>
        <div className='size-17 object-contain bg-[#222224] rounded-full' >
          <img src={data.data.icon} alt={data.data.name} />
        </div>
        <div className='absolute -top-1 -right-1 size-7.5 flex justify-center items-center bg-[#222224] border-3 border-[#E01B1B] rounded-full'>
          <p className='text-sm font-mono font-bold text-white'>{data.data.number}</p>  
        </div>
      </div>
      <div className='w-40'>
        <p className='text-lg font-semibold text-[#222224]'>{data.data.name[0].toUpperCase() + data.data.name.slice(1)}</p>
      </div>
    </button>
  )
}
