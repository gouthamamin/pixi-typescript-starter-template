import { Application as PIXIApplication } from "pixi.js";

class Application {
  private app!: PIXIApplication;


  public async initialize(): Promise<void> {
    // Create a new application
    this.app = new PIXIApplication();

    // Initialize the application
    await this.app.init({
      background: "#1099bb",
      resizeTo: window,
      antialias: true,
    });

    // Append the application canvas to the document body
    document.getElementById("pixi-container")!.appendChild(this.app.canvas);
  };

  public getApp(): PIXIApplication {
    return this.app;
  };

};

export default Application;