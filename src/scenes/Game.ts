import { Text } from "pixi.js";
import BaseScene from "./BaseScene";
import ResizeManager from "../managers/ResizeManager";

class Game extends BaseScene {

  public initialize(): void | Promise<void> {
    console.log("Game scene inti");

    const title = new Text({
      text: "Game Scene",
      style: {
        fill: "white",
        fontSize: 48,
      }
    });

    title.anchor.set(0.5);

    title.position.set(
      ResizeManager.width / 2,
      ResizeManager.height / 2
    );

    this.addChild(title)
  };
};

export default Game;