"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MainScene = void 0;
require("phaser");
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this, {
            key: "MainScene"
        }) || this;
    }
    MainScene.prototype.create = function () {
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
        var playbutton = this.add.image(window.innerWidth / 2 - 100, window.innerHeight / 2 - 200, 'playbutton').setInteractive({ cursor: 'pointer' });
        playbutton.setScale(0.3);
        playbutton.on('pointerdown', function () {
            this.sound.stopAll();
            this.scene.start('Scene1');
        }, this);
    };
    return MainScene;
}(Phaser.Scene));
exports.MainScene = MainScene;
