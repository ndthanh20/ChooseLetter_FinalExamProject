import "phaser";
export class Bear extends Phaser.GameObjects.Sprite {

    private currentScene: Phaser.Scene;
    constructor(params) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        this.currentScene = params.scene;
        //this.initSprite();
        this.currentScene.add.existing(this);
        //this.anims.create({

        //})
    }  
    private initSprite(){

    } 
}