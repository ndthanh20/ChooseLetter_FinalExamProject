import "phaser";
import {Scene1} from "./scene1"
import { Scene2 } from "./scene2";
import { Scene3 } from "./scene3";
import {Scene4} from "./scene4";
const config: Phaser.Types.Core.GameConfig = {
  title: "Choose Letter",
  type: Phaser.AUTO,
  scale: {
          mode: Phaser.Scale.FIT,
          width: window.innerWidth,
          height: window.innerHeight,
          parent: "game",
          autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Scene1,Scene2,Scene3,Scene4],
  backgroundColor: "#18216D"
};
export class ChooseLetterGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new ChooseLetterGame(config);
};