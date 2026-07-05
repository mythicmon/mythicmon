export interface Creature {

    id: string;

    name: string;

    rarity:
        | "Common"
        | "Uncommon"
        | "Rare"
        | "Epic"
        | "Legendary";

    safari: string;

    pack: string;

    catchRate: number;

    shinyRate: number;

    aggressive: boolean;

    flee: boolean;

    alpha: boolean;

    traversal: string;

    sprite: string;

}

export const creatures: Creature[] = [

    {

        id: "leafling",

        name: "Leafling",

        rarity: "Common",

        safari: "verdant",

        pack: "verdant",

        catchRate: 0.65,

        shinyRate: 0.01,

        aggressive: false,

        flee: false,

        alpha: false,

        traversal: "Cut",

        sprite: "/creatures/leafling.png"

    },

    {

        id: "sparkit",

        name: "Sparkit",

        rarity: "Rare",

        safari: "storm",

        pack: "storm",

        catchRate: 0.40,

        shinyRate: 0.01,

        aggressive: true,

        flee: false,

        alpha: false,

        traversal: "Climb",

        sprite: "/creatures/sparkit.png"

    }

];
