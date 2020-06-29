import "phaser";
import {GameScene} from "./gameScene"
const config: Phaser.Types.Core.GameConfig = {
  title: "Choose Letter",
  width: 800,
  height: 600,
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