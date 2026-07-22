import { Text } from "pixi.js";
import BaseScene from "./BaseScene";
import SceneManager from "../core/SceneManager";

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
      SceneManager.getApp().screen.width / 2,
      SceneManager.getApp().screen.height / 2.5
    );

    this.addChild(title)
  };
};

export default Game;