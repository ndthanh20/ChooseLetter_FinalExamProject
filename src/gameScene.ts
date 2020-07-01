import "phaser";
import {Bear} from "../object/bear";
export class GameScene extends Phaser.Scene {
    //private bear: Bear;
    audio;
    constructor() {
        super({
            key: "GameScene"
        });
    }
    init(/*params: any*/): void {

    }
    preload(): void{
        this.load.image("gameImage","assets/goat-01.png");
        this.load.image("gameImage","assets/goat-01.png");
        this.load.image("gameImage","assets/goat-01.png");
        this.load.spritesheet('bear',"assets/bear3-01.png", {frameWidth:311,frameHeight:450});
        this.load.audio('audio',["assets/translate_tts.ogg","translate_tts.mp3"]);
    }
    create(): void{
        var myImage = this.add.image(300,400,'gameImage').setInteractive({cursor:'pointer'});
        myImage.setScale(0.08);

        var myImage2 = this.add.image(750,400,'gameImage').setInteractive({cursor:'pointer'});
        myImage2.setScale(0.08);

        var myImage3 = this.add.image(1200,400,'gameImage').setInteractive({cursor:'pointer'});
        myImage3.setScale(0.08);

        
        //var bear = this.add.image(1500,700,'bear');

        this.anims.create({
            key: 'talk',
            frames : this.anims.generateFrameNames('bear',{start:0, end:1}),
            frameRate: 2,
            repeat: 2,
        });

        var bear1 = this.add.sprite(1500,700,'bear').play('talk').setInteractive({cursor:'pointer'});

        this.audio = this.sound.add ("audio");

        this.audio.play();

        bear1.on('pointerdown',this.startClick,this);

        bear1.on('pointerdown',function () {
            bear1.play('talk');
        },this);
       
    }
    private startClick(pointer, targets){

        this.input.off('pointerdown',this.startClick,this);        
        this.audio.play();
    }
    update(): void{  
    }
}