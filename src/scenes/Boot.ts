import SceneManager from "../core/SceneManager";
import BaseScene from "./BaseScene";
import Preloader from "./Preloader";

class Boot extends BaseScene {

  public async initialize(): Promise<void> {
    console.log("Boot scene init");

    await SceneManager.changeScene(new Preloader());
  };
};

export default Boot;