import { AppState } from "../AppState.js"



export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName || ''
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types || data.types
        this.creatorId = data.creatorId
    }


    static ListTemplate(pokemonname) {
        return `
        <span onclick="app.WildPokemonsController.setActivePokemon('${pokemonname}')" class="text-capitalize fw-bold selectable">${pokemonname}</span>
        `
    }

    get activePokemonCard() {
        return `
        <div class="card border border-danger border-5 p-1">
                <h2 class="text-center text-capitalize">${this.name}</h2>
            </div>
            <img src="${this.img}"
                alt="${this.name} IMG" class="w-75 img-fluid">
            <div class="card border border-danger border-5 p-1">
                <div class="row justify-content-around">
                    <div class="col-11 text-center m-1">
                        <span>Height: ${this.height}</span>
                        <span>Weight: ${this.weight}lbs</span>
                        <span class="text-capitalize">Types: ${this.activeTypes}</span>
                    </div>
                    <div class="col-2">
                        <button onclick="app.SandboxPokemonsController.catchActive()" class="btn btn-danger">Catch</button>
                    </div>
                </div>
            </div>
        `
    }

    get activeTypes() {
        let typesContent = ''
        AppState.activePokemon.types.forEach(type => typesContent += type.type.name + ' ')

        return typesContent
    }








}


// name: String, required
// nickName: String,
// img: String, required
// weight: String,
// height: String,
// types: undefined,
// creatorId: String (References Account Id), required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)