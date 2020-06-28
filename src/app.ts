import "phaser";
const config: Phaser.Types.Core.GameConfig = {
  title: "Choose Letter",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#18216D"
};
export class StarfallGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new StarfallGame(config);
};