import * as THREE from "three";
import { Experience } from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.camera = this.experience.canvas;
    this.scene = this.experience.scene;
    this.debug = this.experience.debug;
    this.debugObject = this.debug.debugObject;

    this.setLight();
  }

  setLight() {
    this.moonLight = new THREE.DirectionalLight(
      new THREE.Color(this.debugObject.moonColor),
      3
    );
    this.moonLight.position.set(2, 4, -2);
    this.scene.add(this.moonLight);

    if (this.debug.active) {
      this.debug.ui.addColor(this.debug.debugObject, "moonColor").onChange(() => {
        this.moonLight.color.set(this.debug.debugObject.moonColor);
      });
    }
  }

  setLightTarget(mesh) {
    this.moonLight.target = mesh;
    this.moonLight.target.updateMatrixWorld();
  }
}
