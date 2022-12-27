import * as dat from "lil-gui";

export default class Debug {
  constructor() {
    this.active = window.location.hash === "#debug";
    this.debugObject = {
        moonColor: "#121212",
        depthColor: "#186691",
        surfaceColor: "#001424"
    };

    if(this.active) {
        this.ui = new dat.GUI();
    }
  }
}
