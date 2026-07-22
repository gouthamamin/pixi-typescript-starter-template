import { Application as PIXIApplication } from "pixi.js";
import { GAME_CONFIG } from "../constants/Config";

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
  };

  public getApp(): PIXIApplication {
    return this.app;
  };

};

export default Application;