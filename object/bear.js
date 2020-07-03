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
exports.Bear = void 0;
require("phaser");
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.key, params.frame) || this;
        _this.currentScene = params.scene;
        //this.initSprite();
        _this.currentScene.add.existing(_this);
        return _this;
        //this.anims.create({
        //})
    }
    Bear.prototype.initSprite = function () {
    };
    return Bear;
}(Phaser.GameObjects.Sprite));
exports.Bear = Bear;
