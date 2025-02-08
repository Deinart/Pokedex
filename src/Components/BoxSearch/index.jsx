import { useContext } from 'react'
import { CodeDistribuitor } from '../../Context'


export const BoxSearch = () => {
  const context = useContext(CodeDistribuitor)

  return (
    <div className='absolute top-27.5 left-1/2 -translate-x-1/2'>
      <input 
        className='w-46 h-12 p-3 font-medium bg-[#D9D9D9] border-4 border-[#222224] rounded-full outline-none' 
        type='text' 
        placeholder='Search...' 
        onChange={(name) => context.setPokeNameSearch(name.target.value)}
      />
    </div>
  )
}