import "phaser";
export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "GameScene"
        });
    }
    init(/*params: any*/): void {

    }
    preload(): void{
        this.load.image("gameImage","assets/gameImage.jpg")
    }
    create(): void{
        
    }
}