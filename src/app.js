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
exports.ChooseLetterGame = void 0;
require("phaser");
var scene1_1 = require("./scene1");
var scene2_1 = require("./scene2");
var scene3_1 = require("./scene3");
var scene4_1 = require("./scene4");
var loadGame_1 = require("./loadGame");
var mainScene_1 = require("./mainScene");
var config = {
    title: "Choose Letter",
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: "game",
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [loadGame_1.LoadGame, mainScene_1.MainScene, scene1_1.Scene1, scene2_1.Scene2, scene3_1.Scene3, scene4_1.Scene4],
    backgroundColor: "#18216D"
};
var ChooseLetterGame = /** @class */ (function (_super) {
    __extends(ChooseLetterGame, _super);
    function ChooseLetterGame(config) {
        return _super.call(this, config) || this;
    }
    return ChooseLetterGame;
}(Phaser.Game));
exports.ChooseLetterGame = ChooseLetterGame;
window.onload = function () {
    var game = new ChooseLetterGame(config);
};
