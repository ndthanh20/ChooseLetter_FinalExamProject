import "phaser";
import { Bear } from "../object/bear";
export class Scene2 extends Phaser.Scene {
    audio: Phaser.Sound.BaseSound;
    constructor() {
        super({
            key: "Scene2"
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
        this.audio = this.sound.add("letter_X");

        //shuffle img array
        var arr = ['pig_e', 'pig_x', 'pig_w'];
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        //add image
        var background = this.add.image(window.innerWidth /2,window.innerHeight /2,'back_ground_2');
        background.setScale(Phaser.Scale.FIT);
        var myImage = this.add.image(window.innerWidth * 0.15, window.innerHeight * 0.4, arr[0]).setInteractive({ cursor: 'pointer' });
        myImage.setScale(0.1);
        var myImage2 = this.add.image(window.innerWidth * 0.5, window.innerHeight * 0.4, arr[1]).setInteractive({ cursor: 'pointer' });
        myImage2.setScale(0.1);
        var myImage3 = this.add.image(window.innerWidth * 0.85, window.innerHeight * 0.4, arr[2]).setInteractive({ cursor: 'pointer' });
        myImage3.setScale(0.1);
        var home = this.add.image(window.innerWidth* 0.1,window.innerHeight*0.1,'home').setInteractive({cursor:'pointer'});
        home.setScale(0.3);

        //add animations
        this.anims.create({
            key: 'talk',
            frames: this.anims.generateFrameNames('bear', { start: 0, end: 2 }),
            frameRate: 2,
            repeat: 2,
        });
        this.anims.create({
            key: 'sorry',
            frames: this.anims.generateFrameNames('bear', { start: 0, end: 2 }),
            frameRate: 2,
            repeat: 0,
        })
        this.anims.create({
            key: 'congrat',
            frames: this.anims.generateFrameNames('bear', { start: 0, end: 2 }),
            frameRate: 2,
            repeat: 0,
        })

        //add bear
        var bear1 = this.add.sprite(window.innerWidth - 150, window.innerHeight - 150, 'bear').play('talk').setInteractive({ cursor: 'pointer' });

        this.audio.play();

        //Click to listen again
        bear1.on('pointerdown', this.startClick, this);
        bear1.on('pointerdown', function () {
            bear1.play('talk');
        }, this);

        //Click to choose which one is correct
        myImage.on('pointerdown', function () {
            if (arr[0] == 'pig_x') {
                this.doRight(myImage, goodjob, goodthinking, goodwork, great);
                bear1.play('congrat');          
                this.finish();
            }
            else {
                this.doWrong(myImage, oops, try_again);
                bear1.play('sorry');
            }
        }, this);
        myImage2.on('pointerdown', function () {
            if (arr[1] == 'pig_x') {
                this.doRight(myImage2, goodjob, goodthinking, goodwork, great);
                bear1.play('congrat');          
                this.finish();
            }
            else {
                this.doWrong(myImage2, oops, try_again);
                bear1.play('sorry');
            }
        }, this);
        myImage3.on('pointerdown', function () {
            if (arr[2] == 'pig_x') {
                this.doRight(myImage3, goodjob, goodthinking, goodwork, great);
                bear1.play('congrat');          
                this.finish();
            }
            else {
                this.doWrong(myImage3, oops, try_again);
                bear1.play('sorry');
            }
        }, this)

        //Click home button
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
                this.scene.start('Scene3');
            }
        })
    }
    private doRight(myImage, goodjob, goodthinking, goodwork, great) {
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
                break;
            case 3:
                great.play();
                break;
        }
        var tween = this.tweens.add({
            targets: myImage,
            scale: 0.12,
            ease: 'Power1',
            duration: 800,
            yoyo: false,
            repeat: 0
        });
        var car = this.add.image(window.innerWidth - 150, window.innerHeight * 0.1, 'car');
        car.setScale(0.4)
        this.tweens.add({
            targets: car,
            x: window.innerWidth,
            duration: 2000,
            ease: 'Power2'
        })
    }
    private doWrong(myImage, oops, try_again){
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
    }
    update(): void {
    }
}