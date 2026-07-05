import Phaser from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite {

    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private keys!: {
        W: Phaser.Input.Keyboard.Key;
        A: Phaser.Input.Keyboard.Key;
        S: Phaser.Input.Keyboard.Key;
        D: Phaser.Input.Keyboard.Key;
        Shift: Phaser.Input.Keyboard.Key;
    };

    private readonly WALK_SPEED = 180;
    private readonly RUN_SPEED = 280;

    constructor(scene: Phaser.Scene, x: number, y: number) {

        super(scene, x, y, "player");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        this.cursors = scene.input.keyboard!.createCursorKeys();

        this.keys = scene.input.keyboard!.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D,
            Shift: Phaser.Input.Keyboard.KeyCodes.SHIFT
        }) as any;
    }

    update() {

        let vx = 0;
        let vy = 0;

        const speed = this.keys.Shift.isDown
            ? this.RUN_SPEED
            : this.WALK_SPEED;

        if (this.keys.A.isDown) vx = -speed;
        if (this.keys.D.isDown) vx = speed;
        if (this.keys.W.isDown) vy = -speed;
        if (this.keys.S.isDown) vy = speed;

        this.setVelocity(vx, vy);

        if (vx !== 0 && vy !== 0) {
            this.body.velocity.normalize().scale(speed);
        }

    }

}
