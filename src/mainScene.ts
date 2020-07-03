import "phaser";
import { Sound, Scene } from "phaser";

export class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key: "MainScene",
        });
    }
    create(): void {
        this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'mainScreen');
        var song = this.sound.add('musicsong', {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }).play();
        var playbutton = this.add.image(window.innerWidth/2-100,window.innerHeight/2-200,'playbutton').setInteractive({ cursor: 'pointer' });
        playbutton.setScale(0.3);

        playbutton.on('pointerdown',function () {
            this.sound.stopAll();
            this.scene.start('Scene1');
        },this)
    }
}