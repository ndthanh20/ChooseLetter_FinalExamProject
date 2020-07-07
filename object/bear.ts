import "phaser";
export class Bear extends Phaser.GameObjects.Sprite {

    private currentScene: Phaser.Scene;
    private sprite;
    constructor(params) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        this.currentScene = params.scene;
        //this.initSprite();
        this.currentScene.add.existing(this);
        
        this.sprite = this.currentScene.add.sprite(window.innerWidth - 150, window.innerHeight - 150, 'bear');

    }  
    private initSprite(){

    } 
    public getSprite(){
        return this.sprite;
    }
}