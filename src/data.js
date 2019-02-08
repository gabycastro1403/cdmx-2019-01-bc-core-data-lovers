// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

// window.printPokemon = {

 
// }

window.printPokemon = {
  sortByHeight: (arrayPokemonData) => {
    return pokemonSortedData = arrayPokemonData.sort((a, b) =>{
      if (a.height > b.height) {
        return 1
      };
      if (a.height < b.height) {
        return -1
      } else {
        return 0;
      }
    })
  },
  SortByWeight: (arrayPokemonData) => {
    const pokemonSortedData = arrayPokemonData.sort((a, b) =>{
      if (parseFloat(a.weight) > parseFloat(b.weight)) {
        return 1
      };
      if (a.weight < b.weight) {
        return -1
      } else {
        return 0;
      }
    });
    return pokemonSortedData;
  },
  filterByWeight: (arrayPokemonData) => {
     const  pokemonFilteredData = arrayPokemonData.filter(pokemon=> {
      if (parseInt (pokemon.weight) < 30) {
          return pokemon;
        } else if (parseInt(pokemon.weight) > 30) {
          return pokemon;
        }
      
    });
    return pokemonFilteredData
  },
  

 /* filterByHeightHeavy: (arrayPokemonData) => {
    return pokemonFilteredHeavy = arrayPokemonData.filter(pokemon => parseInt(pokemon.weight) > 30);
  },*/


  filterByHeightSmall: (arrayPokemonData) => {
    return pokemonFilteredSmall=arrayPokemonData.filter(pokemon => parseInt(pokemon.height) < 1.00);
    
    
  },


  filterByHeightMedium: (arrayPokemonData)=>{
    return pokemonFilteredMedium=arrayPokemonData.filter(pokemon => (parseInt(pokemon.height) >= 1.00) && (parseInt(pokemon.height) <= 1.80));

    
  },

  filterByHeightTall:(arrayPokemonData) => {
    return pokemonFilteredTall=arrayPokemonData.filter(pokemon => (parseInt(pokemon.height) >= 1.80));

    
  },

  pokemonFilterType: (arrayPokemonData,string)=>{
   return pokemonfilter =arrayPokemonData.filter(pokemon => pokemon.type.includes(string));
  }  
}