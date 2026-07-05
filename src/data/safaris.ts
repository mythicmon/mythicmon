export interface Safari {

    id: string;

    name: string;

    unlocked: boolean;

    level: number;

    timer: number;

    safariBalls: number;

    weather: string[];

}

export const safaris: Safari[] = [

    {

        id: "verdant",

        name: "Verdant Forest",

        unlocked: true,

        level: 1,

        timer: 600,

        safariBalls: 30,

        weather: [

            "Sunny",

            "Rain",

            "Fog"

        ]

    },

    {

        id: "storm",

        name: "Storm Highlands",

        unlocked: false,

        level: 1,

        timer: 600,

        safariBalls: 30,

        weather: [

            "Storm",

            "Rain"

        ]

    }

];
