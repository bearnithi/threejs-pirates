import * as THREE from "three";
import { Experience } from "../Experience";

export default class Moon {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.debug = this.experience.debug;

    this.setGeometry();
    this.setMaterial();
    this.setMesh();

    
  }

  setGeometry() {
    this.geometry = new THREE.SphereGeometry(.8, 10, 10);
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial({
      roughness: 0.9,
      metalness: 0.002
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(-18, 8, -20);
    this.scene.add(this.mesh);
  }
}
