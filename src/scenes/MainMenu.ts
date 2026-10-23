import { Text } from "pixi.js";
import Button from "../components/Button";
import SceneManager from "../core/SceneManager";
import ResizeManager from "../managers/ResizeManager";
import BaseScene from "./BaseScene";
import Game from "./Game";

class MainMenu extends BaseScene {
  private title!: Text;
  private playButton!: Button;

  public async initialize(): Promise<void> {
    console.log("MainMenu scene inti");

    this.title = new Text({
      text: "Main Menu Scene",
      style: {
        fill: "white",
        fontSize: 48,
      }
    });

    this.title.anchor.set(0.5);
    this.addChild(this.title);

    this.playButton = new Button({
      text: "Play Game",
      onClick: async () => {
        await SceneManager.changeScene(new Game());
      },
    });

    this.addChild(this.playButton);

    this.resize();
  };

  public resize(): void {
    if (!this.title || !this.playButton) return;

    this.title.position.set(
      ResizeManager.width / 2,
      ResizeManager.height / 2.5
    );

    this.playButton.position.set(
      ResizeManager.width / 2,
      ResizeManager.height / 1.5
    );
  };
};

export default MainMenu;