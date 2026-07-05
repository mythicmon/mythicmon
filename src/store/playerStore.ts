import { create } from "zustand";

import { Player } from "../types/Player";

import { defaultPlayer } from "../data/player";

interface PlayerStore{

    player:Player;

    setPlayer:(player:Player)=>void;

}

export const usePlayerStore=create<PlayerStore>((set)=>({

    player:defaultPlayer,

    setPlayer:(player)=>set({player})

}));
