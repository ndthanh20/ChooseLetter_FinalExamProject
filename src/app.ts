import "phaser";
import {GameScene} from "./gameScene"
const config: Phaser.Types.Core.GameConfig = {
  title: "Choose Letter",
  width: 1600,
  height: 900,
  parent: "game",
  scene: [GameScene],
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