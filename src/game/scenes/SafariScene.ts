import Phaser from "phaser";
import { Player } from "../objects/Player";

export class SafariScene extends Phaser.Scene {

    private player!: Player;

    constructor() {
        super("SafariScene");
    }

    preload() {

        // Temporary placeholder graphics
        this.load.image("grass", "assets/tiles/grass.png");
        this.load.image("tree", "assets/tiles/tree.png");
        this.load.image("player", "assets/player/player.png");

    }

    create() {

        //---------------------------------
        // WORLD
        //---------------------------------

        this.physics.world.setBounds(0,0,3000,3000);

        this.cameras.main.setBounds(0,0,3000,3000);

        //---------------------------------
        // GRASS
        //---------------------------------

        for(let x=0;x<60;x++){

            for(let y=0;y<60;y++){

                this.add.image(
                    x*50,
                    y*50,
                    "grass"
                ).setOrigin(0);

            }

        }

        //---------------------------------
        // TREES
        //---------------------------------

        const trees=this.physics.add.staticGroup();

        const positions=[

            [250,300],
            [500,600],
            [1200,900],
            [1450,1700],
            [1800,1200],
            [2300,500],
            [2600,2100]

        ];

        positions.forEach(([x,y])=>{

            trees.create(x,y,"tree");

        });

        //---------------------------------
        // PLAYER
        //---------------------------------

        this.player=new Player(
            this,
            500,
            500
        );

        this.physics.add.collider(
            this.player,
            trees
        );

        //---------------------------------
        // CAMERA
        //---------------------------------

        this.cameras.main.startFollow(this.player);

        this.cameras.main.setZoom(1.3);

    }
    const leafling=new Creature(

    this,

    800,

    650,

    "leafling",

    "Leafling"

);

    update(){

        this.player.update();

    }

}
