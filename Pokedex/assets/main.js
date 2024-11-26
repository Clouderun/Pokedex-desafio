const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151;
const limit = 10
let offset = 0;




//pega a lista e atribui a uma variavel
// concatena com o conteudo ja existeste da lista e add + 1

//callbacks, o segundo then puxa o primeiro e o primeiro puxa a inf do fetch[promise]
//converte o body pra json que da a promise de any
// ai pegamos os results q e a lista de pokemon


function loadPokemonItens(offset, limit) {
    
    
    pokeApi.getPokemons(offset, limit).then((pokemons =[]) => {
        const newHtml = pokemons.map((pokemon) => `<li class="pokemon ${pokemon.type}"><span class="number">#${pokemon.number}</span> <span class="name">${pokemon.name}</span> <div class="detail"><ol class="types">${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}</ol><img src="${pokemon.photo}" alt="${pokemon.name}"></div></li>`).join('')
    //join junta os elementos de uma listahtml em uma string
    // e concatenamos essa lista com um separador e juntou tudo se tornando um novo html
        pokemonList.innerHTML += newHtml
    })
}
    

loadPokemonItens(offset, limit)


//remove o botao de acordo com limite definido do que mostrar

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }


})
