import "phaser";
export class GameScene extends Phaser.Scene {
    bearImg ;
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
        this.load.spritesheet('bear',"assets/bear3-01.png", {frameWidth:400,frameHeight:450});
        this.load.audio('audio',["assets/translate_tts.ogg","translate_tts.mp3"]);
    }
    create(): void{
        var myImage = this.add.image(300,400,'gameImage');
        myImage.setScale(0.08);

        var myImage2 = this.add.image(750,400,'gameImage');
        myImage2.setScale(0.08);

        var myImage3 = this.add.image(1200,400,'gameImage');
        myImage3.setScale(0.08);

        this.bearImg = this.physics.add.sprite(1400,750,'bear');

        //var audio = this.sound.add ("audio");
        //audio.play();
       
    }
    update(): void{
        
        //var pointer = this.input.activePointer;
        this.input.on('gameobjectdown',function (pointer,gameObject) {
            console.log(gameObject);
            gameObject.setInteractive().on('pointerdown', function(){
                var audio = this.sound.add ("audio");
                audio.play();
            });
        });
    }
}