export interface Berry {

    id: string;

    name: string;

    description: string;

    catchBoost: number;

    duration: number;

}

export const berries: Berry[] = [

    {

        id: "basic",

        name: "Basic Berry",

        description: "Slightly improves catch chance.",

        catchBoost: 0.10,

        duration: 60

    },

    {

        id: "gold",

        name: "Golden Berry",

        description: "Greatly improves catch chance.",

        catchBoost: 0.35,

        duration: 60

    }

];
