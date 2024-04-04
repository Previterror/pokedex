import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js";


class SandboxService {


    async getPokemons() {
        const response = await api.get('api/pokemon')
        console.log('sandbox', response);
        // AppState.mypokemons = response.data.results
        // console.log('👹🔧', AppState.wildpokemons);
    }


    async catchActive() {
        console.log('catching', AppState.activePokemon.name);
        const response = await api.post('api/pokemon', AppState.activePokemon)
        console.log('posting', response)
        const caught = new Pokemon(response.data)
        AppState.mypokemons.push(caught)
        console.log('appstate', AppState.mypokemons);
    }


}

export const sandboxService = new SandboxService