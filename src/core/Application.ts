import { Application as PIXIApplication } from "pixi.js";
import { GAME_CONFIG } from "../constants/Config";
import SceneManager from "./SceneManager";
import Boot from "../scenes/Boot";

class Application {
  private app!: PIXIApplication;

  public async initialize(): Promise<void> {
    // Create a new application
    this.app = new PIXIApplication();

    // Initialize the application
    await this.app.init({
      background: GAME_CONFIG.background,
      resizeTo: GAME_CONFIG.resizeTo,
      antialias: GAME_CONFIG.antialias,
    });

    // Append the application canvas to the document body
    document.getElementById("pixi-container")!.appendChild(this.app.canvas);

    SceneManager.initialize(this.app);
    this.setupResizeHandler();
    await SceneManager.changeScene(new Boot());
  };

  public getApp(): PIXIApplication {
    return this.app;
  };


  private setupResizeHandler(): void {
    window.addEventListener("resize",()=>{
      SceneManager.resize();
    });
  };

};

export default Application;