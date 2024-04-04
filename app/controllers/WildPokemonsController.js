import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { wildPokemonsService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WildPokemonsController {
    constructor() {
        // console.log('Poke online')
        AppState.on('wildpokemons', this.drawWildPokemons)
        AppState.on('activePokemon', this.drawActivePokemon)
        this.getPokemons()

    }

    drawActivePokemon() {
        const activePokemon = AppState.activePokemon
        setHTML('activemon', activePokemon.activePokemonCard)
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
        wildPokemons.forEach(pokemon => wildPokemonsList += Pokemon.ListTemplate(pokemon.name))
        setHTML('monlist', wildPokemonsList)
    }

    setActivePokemon(pokemonName) {
        // console.log('setting', pokemonName)
        wildPokemonsService.setActivePokemon(pokemonName)
    }
}