import Phaser from "phaser";

export type CreatureState =
    | "idle"
    | "wander"
    | "notice"
    | "flee"
    | "attack";

export class Creature extends Phaser.Physics.Arcade.Sprite {

    species: string;
    state: CreatureState = "idle";

    private moveTimer = 0;
    private readonly WALK_SPEED = 70;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        species: string
    ) {

        super(scene, x, y, texture);

        this.species = species;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

    }

    update(time: number) {

        if (time > this.moveTimer) {

            this.moveTimer = time + Phaser.Math.Between(1500, 4000);

            const angle = Phaser.Math.FloatBetween(
                0,
                Math.PI * 2
            );

            this.scene.physics.velocityFromRotation(
                angle,
                this.WALK_SPEED,
                this.body.velocity
            );

            this.state = "wander";

        }

    }

}
