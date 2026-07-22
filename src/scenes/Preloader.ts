import BaseScene from "./BaseScene";

class Preloader extends BaseScene{

  public initialize(): void | Promise<void> {
    console.log("Preloader scene inti");
  };
};

export default Preloader;