import { Text } from "pixi.js";
import Button from "../components/Button";
import SceneManager from "../core/SceneManager";
import BaseScene from "./BaseScene";
import Game from "./Game";

class MainMenu extends BaseScene {

  public async initialize(): Promise<void> {
    console.log("MainMenu scene inti");

    const title = new Text({
      text: "Main Menu Scene",
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

    this.addChild(title);

    const playButton = new Button({
      text: "Play Game",
      onClick: async () => {
        await SceneManager.changeScene(new Game());
      },
    });

    playButton.position.set(
      SceneManager.getApp().screen.width / 2,
      SceneManager.getApp().screen.height / 1.5
    );
    this.addChild(playButton);

  };
};

export default MainMenu;