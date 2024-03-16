export interface Pokemon {
    id: number;
    name: string;
    types: PokemonType[];
    abilities: Ability[];
    sprites: Sprites;
    weight: number;
    height: number;
    stats: Stats[];
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

interface Stats {
    base_stat: number,
    effort: number,
    stat: {
        name: string;
    };
}