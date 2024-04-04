import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";



// @ts-ignore
const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 8000
})

class PokeService {

    async getPokemons() {
        const response = await pokeApi.get('pokemon')
        // console.log('👹🔧', response);
        AppState.wildpokemons = response.data.results
        // console.log('👹🔧', AppState.wildpokemons);
    }

    async setActivePokemon(pokemonName) {
        const response = await pokeApi.get(`/pokemon/${pokemonName}`)
        console.log('setting', response.data)
        const ActivePokemon = new Pokemon(response.data)
        AppState.activePokemon = ActivePokemon
        console.log(AppState.activePokemon);
    }

}

export const wildPokemonsService = new PokeService
