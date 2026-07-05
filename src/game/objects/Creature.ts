import Phaser from "phaser";

export class Creature extends Phaser.Physics.Arcade.Sprite{

    species:string;

    constructor(
        scene:Phaser.Scene,
        x:number,
        y:number,
        texture:string,
        species:string
    ){

        super(scene,x,y,texture);

        this.species=species;

        scene.add.existing(this);

        scene.physics.add.existing(this);

    }

}
