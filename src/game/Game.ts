import Phaser from "phaser";

import { SafariScene } from "./scenes/SafariScene";

export function createSafariGame(parent: string) {

    return new Phaser.Game({

        type: Phaser.AUTO,

        parent,

        width: 1280,

        height: 720,

        backgroundColor: "#12162b",

        pixelArt: false,

        physics: {
            default: "arcade",
            arcade: {
                gravity: { x: 0, y: 0 },
                debug: false
            }
        },

        scene: [
            SafariScene
        ]
    });

}
