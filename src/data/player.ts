import { Player } from "../types/Player";

export const defaultPlayer: Player = {

    id:"",

    username:"Trainer",

    title:"New Explorer",

    level:1,

    xp:0,

    coins:500,

    gems:0,

    stars:0,

    blackoutCount:0,

    totalCaught:0,

    totalCards:0,

    totalShinies:0,

    unlockedPacks:[
        "verdant"
    ],

    unlockedSafaris:[
        "verdant"
    ],

    unlockedCreatures:[],

    cardCollection:[],

    creatureCollection:[],

    packProgress:[

        {

            packId:"verdant",

            level:1,

            xp:0,

            packsOpened:0

        }

    ],

    safariProgress:[

        {

            safariId:"verdant",

            level:1,

            xp:0,

            runsCompleted:0

        }

    ]

};
