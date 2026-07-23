import SceneManager from "../core/SceneManager";
import BaseScene from "./BaseScene";
import MainMenu from "./MainMenu";

class Preloader extends BaseScene {

  public async initialize(): Promise<void> {
    console.log("Preloader scene inti");
    await SceneManager.changeScene(new MainMenu());
  };
};

export default Preloader;