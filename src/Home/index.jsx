import './style.css';
import { PokemonList } from '../Components/PokemonList';
import BoxInformation from '../Components/BoxInformation';

export default function Home() {
  
  return (
    <div className="home w-full h-screen relative" >
      <BoxInformation />
      <PokemonList />
    </div>
  )
}
