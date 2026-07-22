import { Assets } from "pixi.js";

class AssetLoader {

  public static async load(assets: iAsset[]): Promise<void> {
    await Assets.load(assets);
  };
};

export default AssetLoader;