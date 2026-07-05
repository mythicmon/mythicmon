export interface Pack {

    id: string;

    name: string;

    level: number;

    experience: number;

    unlocked: boolean;

    safari: string;

}

export const packs: Pack[] = [

    {

        id: "verdant",

        name: "Verdant Pack",

        level: 1,

        experience: 0,

        unlocked: true,

        safari: "verdant"

    },

    {

        id: "storm",

        name: "Storm Pack",

        level: 1,

        experience: 0,

        unlocked: false,

        safari: "storm"

    }

];
