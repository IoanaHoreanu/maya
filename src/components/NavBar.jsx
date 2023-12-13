function NavBar({ pokemonList, onPokemonClick }) {
  const handlePokemonClick = (index) => {
    const selectedPokemon = pokemonList[index];
    if (selectedPokemon.name.toLowerCase() === 'pikachu') {
      alert('Pika Pikachu!!!');
    }
    onPokemonClick(index);
  };
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handlePokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
