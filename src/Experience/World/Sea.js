import * as THREE from "three";
import { Experience } from "../Experience";
import waterVertexShader from "../shaders/water/vertex.glsl";
import waterFragmentShader from "../shaders/water/fragment.glsl";

export default class Sea {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.debugObject = this.debug.debugObject;

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.update();
  }

  setGeometry() {
    this.geometry = new THREE.PlaneGeometry(20, 20, 512, 512);
  }

  setMaterial() {
    this.material = new THREE.ShaderMaterial({
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: {
        uBigWavesElevation: {
          value: 0.2,
        },
        uBigWavesFrequency: {
          value: new THREE.Vector2(1.5, 0.8),
        },
        uTime: {
          value: 0,
        },
        uBigWavesSpeed: { value: 0.5 },
        uDepthColor: {
          value: new THREE.Color(this.debugObject.depthColor),
        },
        uSurfaceColor: {
          value: new THREE.Color(this.debugObject.surfaceColor),
        },
        uColorOffset: { value: 0.08 },
        uColorMultiplier: {
          value: 5,
        },
        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallIterations: { value: 4 },
      },
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI * 0.5;
    this.scene.add(this.mesh);
  }

  update() {
    this.material.uniforms.uTime.value = this.time.elapsedTime * 0.002;
  }
}
