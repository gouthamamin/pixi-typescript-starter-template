import gsap from "gsap";
import BaseScene from "../scenes/BaseScene";

export class SceneTransition {

  public static async fadeIn(scene: BaseScene, duration: number = 0.25): Promise<void> {
    scene.alpha = 0;

    await gsap.to(scene, {
      alpha: 1,
      duration: duration
    });
  };

  public static async fadeOut(scene: BaseScene, duration: number = 0.25): Promise<void> {
    if (scene.alpha === 0) return;

    await gsap.to(scene, {
      alpha: 0,
      duration: duration
    });
  };

};
