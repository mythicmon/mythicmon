export interface Player {

    id: string;

    username: string;

    title: string;

    level: number;

    xp: number;

    coins: number;

    gems: number;

    stars: number;

    blackoutCount: number;

    totalCaught: number;

    totalCards: number;

    totalShinies: number;

    unlockedPacks: string[];

    unlockedSafaris: string[];

    unlockedCreatures: string[];

    cardCollection: CardEntry[];

    creatureCollection: CreatureEntry[];

    packProgress: PackProgress[];

    safariProgress: SafariProgress[];

}
export interface CardEntry{

    creatureId:string;

    amount:number;

    shiny:boolean;

}

export interface CreatureEntry{

    creatureId:string;

    caught:number;

    highestLevel:number;

    shinyCaught:boolean;

    photoTaken:boolean;

}

export interface PackProgress{

    packId:string;

    level:number;

    xp:number;

    packsOpened:number;

}

export interface SafariProgress{

    safariId:string;

    level:number;

    xp:number;

    runsCompleted:number;

}
