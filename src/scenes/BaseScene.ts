import { Container } from "pixi.js";

abstract class BaseScene extends Container {
  /**
   * called when scene is loaded
   */
  public abstract initialize(): void | Promise<void>;

  /**
   * called every frame via the PixiJS ticker
   */
  public update(_delta: number): void { };

  /**
   * called when the screen size changes
   */
  public resize(): void { };

  /**
   * called before removing the scene
   */
  public destroyScene(): void { };
};

export default BaseScene;
