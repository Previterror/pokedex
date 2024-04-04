import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { sandboxService } from "../services/SandboxPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class SandboxPokemonsController {
    constructor() {
        console.log('Sandbox online')
        AppState.on('account', this.getPokemons)
        AppState.on('mypokemons', this.drawMyPokemons)
    }

    async catchActive() {
        try {
            await sandboxService.catchActive()
        } catch (error) {
            console.log(`Failed to catch ${AppState.activePokemon.name}`, error);
            Pop.toast(`Failed to catch ${AppState.activePokemon.name}`, "error")
        }
    }

    async getPokemons() {
        try {
            await sandboxService.getPokemons()

        } catch (error) {
            console.error(error)
            Pop.toast("Could Not find your Pokemen", 'error')
        }
    }


    drawMyPokemons() {
        const myPokemons = AppState.mypokemons
        let myPokemonsList = ''
        myPokemons.forEach(pokemon => myPokemonsList += Pokemon.ListTemplate(pokemon.name))
        setHTML('my-monlist', myPokemonsList)
    }


}