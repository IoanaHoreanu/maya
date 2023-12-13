import PokemonCard from './components/PokemonCard'; 
import { useState } from "react";
import NavBar from './components/NavBar';

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const currentPokemon = pokemonList[pokemonIndex];

  const goToPreviousPokemon = () => {
    setPokemonIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNextPokemon = () => {
    setPokemonIndex((prevIndex) => Math.min(prevIndex + 1, pokemonList.length - 1));
  };

  return (
    <div>
      <PokemonCard pokemon={currentPokemon} />
      <NavBar
        onPreviousClick={goToPreviousPokemon}
        onNextClick={goToNextPokemon}
        hasPrevious={pokemonIndex > 0}
        hasNext={pokemonIndex < pokemonList.length - 1}
      />
    </div>
  );
}

export default App;
