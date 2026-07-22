import SceneManager from "../core/SceneManager";
import BaseScene from "./BaseScene";
import Game from "./Game";

class MainMenu extends BaseScene{

  public async initialize(): Promise<void> {
    console.log("MainMenu scene inti");
    await SceneManager.changeScene(new Game());
  };
};

export default MainMenu;