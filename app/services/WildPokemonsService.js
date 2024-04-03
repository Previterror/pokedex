import { AppState } from "../AppState.js";



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
        console.log('👹🔧', AppState.wildpokemons);
    }

}

export const wildPokemonsService = new PokeService
