class Responsive {

  public static getWidth(): number {
    return window.innerWidth;
  };

  public static getHeight(): number {
    return window.innerHeight;
  };

  public static isPortrait(): boolean {
    return window.innerHeight > window.innerWidth;
  };

  public static isLandscape(): boolean {
    return window.innerWidth > window.innerHeight;
  };

  public static isMobile(): boolean {
    return window.innerWidth <= 768;
  };

  public static isDesktop(): boolean {
    return !this.isMobile();
  };

};

export default Responsive;