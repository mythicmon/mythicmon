import Phaser from "phaser";
import { Player } from "../objects/Player";

export class SafariScene extends Phaser.Scene {

    private player!: Player;

    constructor() {
        super("SafariScene");
    }

    preload() {

        // Temporary player placeholder
        this.load.image(
            "player",
            "https://labs.phaser.io/assets/sprites/phaser-dude.png"
        );

    }

    create() {

        this.physics.world.setBounds(
            0,
            0,
            2500,
            2500
        );

        this.cameras.main.setBounds(
            0,
            0,
            2500,
            2500
        );

        this.player = new Player(
            this,
            400,
            400
        );

        this.cameras.main.startFollow(this.player);

        this.add.text(
            20,
            20,
            "Verdant Forest Prototype"
        ).setScrollFactor(0);

    }

    update() {

        this.player.update();

    }

}
