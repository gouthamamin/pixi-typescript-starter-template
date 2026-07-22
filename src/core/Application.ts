import { Application as PIXIApplication } from "pixi.js";
import { GAME_CONFIG } from "../constants/Config";
import SceneManager from "./SceneManager";
import ResizeManager from "../managers/ResizeManager";
import Boot from "../scenes/Boot";

class Application {
  private app!: PIXIApplication;

  public async initialize(): Promise<void> {
    // Create a new application
    this.app = new PIXIApplication();

    // Initialize the application
    await this.app.init({
      background: GAME_CONFIG.background,
      antialias: GAME_CONFIG.antialias,
    });

    // Append the application canvas to the document body
    document.getElementById("pixi-container")!.appendChild(this.app.canvas);

    SceneManager.initialize(this.app);
    ResizeManager.init(this.app);

    await SceneManager.changeScene(new Boot());
  };

  public getApp(): PIXIApplication {
    return this.app;
  }
}

export default Application;