import "phaser";
import { Bear } from "../object/bear";
export class Scene4 extends Phaser.Scene {
    audio: Phaser.Sound.BaseSound;
    constructor() {
        super({
            key: "Scene4"
        });
    }
    init(/*params: any*/): void {

    }
    create(): void {
        //add sound
        var goodjob = this.sound.add('goodjob');
        var goodthinking = this.sound.add('goodthinking');
        var goodwork = this.sound.add('goodwork');
        var great = this.sound.add('great');
        var oops = this.sound.add('oops');
        var try_again = this.sound.add('try_again');
        this.audio = this.sound.add("letter_A");

        //add image
        var background = this.add.image(window.innerWidth /2,window.innerHeight /2,'back_ground_4');
        background.setScale(Phaser.Scale.FIT);
        var myImage = this.add.image(window.innerWidth * 0.15, window.innerHeight * 0.4, 'fish_j').setInteractive({ cursor: 'pointer' });
        myImage.setScale(0.1);
        var myImage2 = this.add.image(window.innerWidth * 0.5, window.innerHeight * 0.4, 'fish_i').setInteractive({ cursor: 'pointer' });
        myImage2.setScale(0.1);
        var myImage3 = this.add.image(window.innerWidth * 0.85, window.innerHeight * 0.4, 'fish_a').setInteractive({ cursor: 'pointer' });
        myImage3.setScale(0.1);
        var home = this.add.image(window.innerWidth* 0.1,window.innerHeight*0.1,'home').setInteractive({cursor:'pointer'});
        home.setScale(0.3);

        this.anims.create({
            key: 'talk',
            frames: this.anims.generateFrameNames('bear', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: 1,
        });

        //add bear
        var bear1 = this.add.sprite(window.innerWidth - 150, window.innerHeight - 200, 'bear').play('talk').setInteractive({ cursor: 'pointer' });

        this.audio.play();

        //Click to listen again
        bear1.on('pointerdown', this.startClick, this);
        bear1.on('pointerdown', function () {
            bear1.play('talk');
        }, this);

        myImage.on('pointerdown', function () {
            let wrongSound = Phaser.Math.Between(0, 1);
            switch (wrongSound) {
                case 0:
                    oops.play();
                    break;
                case 1:
                    try_again.play();
                    break;
            }
            var tween = this.tweens.add({
                targets: myImage,
                scale: 0.12,
                ease: 'Power1',
                duration: 800,
                yoyo: true,
                repeat: 0
            });
            bear1.play('talk');
        }, this);
        myImage2.on('pointerdown', function () {
            let wrongSound = Phaser.Math.Between(0, 1);
            switch (wrongSound) {
                case 0:
                    oops.play();
                    break;
                case 1:
                    try_again.play();
                    break;
            }
            var tween = this.tweens.add({
                targets: myImage2,
                scale: 0.12,
                ease: 'Power1',
                duration: 800,
                yoyo: true,
                repeat: 0
            });
            bear1.play('talk');
        }, this);
        myImage3.on('pointerdown', function () {
            let rightSound = Phaser.Math.Between(0, 3);
            switch (rightSound) {
                case 0:
                    goodjob.play();
                    break;
                case 1:
                    goodthinking.play();
                    break;
                case 2:
                    goodwork.play();
                case 3:
                    great.play();
            }
            var tween = this.tweens.add({
                targets: myImage3,
                scale: 0.12,
                ease: 'Power1',
                duration: 800,
                yoyo: false,
                repeat: 0
            });
            bear1.play('talk');
            console.log("HELLO");
            this.finish();
        }, this)

        home.on('pointerdown',function (){
            this.sound.stopAll();
            this.scene.start('MainScene');
        },this);
    }

    private startClick(pointer, targets) {
        this.input.off('pointerdown', this.startClick, this);
        this.audio.play();
    }
    private finish() {
        this.time.addEvent({
            delay: 2500,
            callback: () => {
                this.tweens.killAll();
                this.sound.stopAll();
                this.scene.start('MainScene');
            }
        })
    }
    update(): void {
    }
}