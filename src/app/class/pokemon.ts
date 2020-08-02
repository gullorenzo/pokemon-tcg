export class PokemonCard{
    cards: Card[];
}

export class Card {
    ability: IAbility;
    artist: string;
    attacks: IAttack[];
    convertedRetreatCost: number;
    evolvesFrom: string;
    hp: string;
    id: string;
    imageUrl: string;
    imageUrlHiRes: string;
    name: string;
    nationalPokedexNumber: number;
    number: string;
    rarity: string;
    resistances: Basic[];
    retreatCost: string[];
    series: string;
    set: string;
    setCode: string;
    subtype: string;
    supertype: string;
    text: string[];
    types: string[];
    weaknesses: Basic[];
}

export class Basic {
    type: string;
    value: string;
}
export class IAttack {
    cost: string[];
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: string;
}
export class IAbility {
    name: string;
    text: string;
    type: string;
}

