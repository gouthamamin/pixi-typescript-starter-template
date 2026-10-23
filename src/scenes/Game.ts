import { Text } from "pixi.js";
import BaseScene from "./BaseScene";
import ResizeManager from "../managers/ResizeManager";

class Game extends BaseScene {
  private title!: Text;

  public initialize(): void | Promise<void> {
    console.log("Game scene inti");

    const title = new Text({
      text: "Game Scene",
      style: {
        fill: "white",
        fontSize: 48,
      }
    });

    this.title = title;
    this.title.anchor.set(0.5);
    this.addChild(this.title);

    this.resize();
  };

  public resize(): void {
    if (!this.title) return;

    this.title.position.set(
      ResizeManager.width / 2,
      ResizeManager.height / 2
    );
  };
};

export default Game;