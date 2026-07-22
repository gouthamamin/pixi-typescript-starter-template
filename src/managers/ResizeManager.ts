import { Application } from "pixi.js";
import { GAME_CONFIG } from "../constants/Config";
import SceneManager from "../core/SceneManager";

export class ResizeManager {
  private static app: Application;

  public static init(app: Application): void {
    this.app = app;
    window.addEventListener("resize", () => this.resize());
    this.resize();
  }

  public static resize(): void {
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    this.app.renderer.resize(windowW, windowH);

    const scale = Math.min(windowW / GAME_CONFIG.width, windowH / GAME_CONFIG.height);
    this.app.stage.scale.set(scale);
    this.app.stage.x = (windowW - GAME_CONFIG.width * scale) / 2;
    this.app.stage.y = (windowH - GAME_CONFIG.height * scale) / 2;

    SceneManager.resize();
  }

  public static get width(): number {
    return GAME_CONFIG.width;
  }

  public static get height(): number {
    return GAME_CONFIG.height;
  }
}

export default ResizeManager;
