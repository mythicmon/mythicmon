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
