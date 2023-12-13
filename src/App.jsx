import PokemonCard from './components/PokemonCard'; 
import { useState, useEffect } from "react";
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

  useEffect(() => {
    alert("Hello Pokemon Trainer :)");
  }, []);

  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <div>
      <PokemonCard pokemon={currentPokemon} />
      <NavBar
        pokemonList={pokemonList}
        onPokemonClick={handlePokemonClick}
      />
    </div>
  );
}

export default App;