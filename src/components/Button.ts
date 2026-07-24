import gsap from "gsap";
import { Container, Graphics, Text } from "pixi.js";


class Button extends Container {
  constructor(buttonOptions: iButtonProps) {
    super();

    const width = buttonOptions.width ?? 220;
    const height = buttonOptions.height ?? 80;
    const backgroundColor = buttonOptions.backgroundColor ?? "green";

    const background = new Graphics()
      .roundRect(0, 0, width, height, 12)
      .fill(backgroundColor);


    background.eventMode = "static";
    background.cursor = "pointer";

    const label = new Text({
      text: buttonOptions.text,
      style: {
        fill: buttonOptions.textColor ?? "white",
        fontSize: 28
      }
    });
    label.anchor.set(0.5);
    label.position.set(width / 2, height / 2);

    background.addChild(label);

    // Click Effect
    background.on("pointerdown", () => {
      gsap.to(this.scale, {
        x: 0.95,
        y: 0.95,
        duration: 0.05,
      });
    });

    background.on("pointerup", () => {
      gsap.to(this.scale, {
        x: 1.05,
        y: 1.05,
        duration: 0.05,
      });
    });

    if (buttonOptions.onClick) {
      background.on("pointertap", buttonOptions.onClick)
    }

    this.addChild(background);
    this.pivot.set(width / 2, height / 2);
  }
};

export default Button;