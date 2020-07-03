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
exports.LoadGame = void 0;
var LoadGame = /** @class */ (function (_super) {
    __extends(LoadGame, _super);
    function LoadGame() {
        return _super.call(this, {
            key: "LoadGame"
        }) || this;
    }
    LoadGame.prototype.preload = function () {
        var progress = this.add.graphics();
        var text = this.add.text(window.innerWidth / 2 - 300, window.innerHeight / 2, 'Loading game...', {
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
        this.load.pack("data", "assets/data/data.json");
        this.load.pack("audio", "assets/data/data_audio.json");
    };
    LoadGame.prototype.create = function () {
        this.scene.start('MainScene');
    };
    return LoadGame;
}(Phaser.Scene));
exports.LoadGame = LoadGame;
