import Phaser from "phaser";

export class SafariScene extends Phaser.Scene {

    constructor() {
        super("SafariScene");
    }

    preload() {

        // Assets will go here later.
    }

    create() {

        this.add.text(
            40,
            40,
            "Verdant Safari",
            {
                color: "#ffffff",
                fontSize: "32px"
            }
        );

        this.add.text(
            40,
            90,
            "Prototype Build",
            {
                color: "#99aaff",
                fontSize: "18px"
            }
        );

    }

    update() {

    }

}
