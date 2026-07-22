import BaseScene from "./BaseScene";

class Boot extends BaseScene {

  public initialize(): void | Promise<void> {
    console.log("Boot scene init");
  };
};

export default Boot;