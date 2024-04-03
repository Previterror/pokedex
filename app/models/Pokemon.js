export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
    }


    static wildListTemplate(pokemonname) {
        return `
        <span class="text-capitalize fw-bold">${pokemonname}</span>
        `
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