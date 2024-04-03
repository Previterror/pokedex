import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { wildPokemonsService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokeController {
    constructor() {
        console.log('Poke online')
        AppState.on('wildpokemons', this.drawWildPokemons)
        this.getPokemons()

    }

    async getPokemons() {
        try {
            await wildPokemonsService.getPokemons()
        } catch (error) {
            console.error(error)
            Pop.toast("Could Not find Wild Pokemen", 'error')
        }
    }

    drawWildPokemons() {
        const wildPokemons = AppState.wildpokemons
        let wildPokemonsList = ''
        wildPokemons.forEach(pokemon => wildPokemonsList += Pokemon.wildListTemplate(pokemon.name))
        setHTML('monlist', wildPokemonsList)
    }


}