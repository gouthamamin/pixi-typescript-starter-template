import { Application as PIXIApplication } from "pixi.js";
import BaseScene from "../scenes/BaseScene";
import { SceneTransition } from "../helpers/SceneTransition";

class SceneManager {
  private static app: PIXIApplication;
  private static currentScene: BaseScene | null;

  public static initialize(app: PIXIApplication): void {
    this.app = app;
    console.log("scene manager intialized");
  };

  public static async changeScene(scene: BaseScene): Promise<void> {
    if (this.currentScene) {
      await SceneTransition.fadeOut(this.currentScene);
      this.currentScene.destroyScene();
      this.app.stage.removeChild(this.currentScene);
      this.currentScene.destroy({ children: true });
    }

    scene.alpha = 0;
    this.currentScene = scene;
    this.app.stage.addChild(scene);
    await scene.initialize();
    await SceneTransition.fadeIn(scene);
  }

  public static getCurrentScene(): BaseScene | null {
    return this.currentScene;
  };

  public static resize(): void {
    this.currentScene?.resize();
  };

  public static getApp(): PIXIApplication {
    return this.app;
  };

};

export default SceneManager;