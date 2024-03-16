export interface Pokelist {
    results: Item[];
}

interface Item {
    name: string;
    url: string;
}

export interface Pokemon {
    name: string;
    types: PokemonType[];
    abilities: Ability[];
    sprites: Sprites;
    weight: number;
    height: number;
}

interface PokemonType {
    type: {
        name: string;
    };
}

interface Ability {
    ability: {
        name: string;
    };
}

interface Sprites {
    front_default: string;
    back_default: string;
}