export class LoadGame extends Phaser.Scene{
    constructor() {
        super({
            key: "LoadGame"
        });
    }
    preload(){
        var progress = this.add.graphics();
        var text = this.add.text(window.innerWidth/2-300, window.innerHeight/2, 'Loading game...', {
            font: '50px Arial',
            fill: 'white'
        });

        this.load.on('progress', function (value) {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, 270, 1920 * value, 60);
            text.setText('Loading game...' + Math.floor(value * 100) + '%');
        });
        this.load.on('complete', function () {
            progress.destroy();
        });

        this.load.pack("data","assets/data/data.json");
        this.load.pack("audio","assets/data/data_audio.json");
    }
    create(){
        this.scene.start('MainScene');
    }
}