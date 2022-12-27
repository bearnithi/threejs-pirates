import * as THREE from "three";
import { Experience } from "../Experience";

export default class SceneAudioPlayer {
  constructor() {
    this.experience = new Experience();
    this.camera = this.experience.camera;

    this.setAudioListener();
    this.setLoader();
  }

  setAudioListener() {
    const listener = new THREE.AudioListener();
    this.camera.instance.add(listener);
    this.sound = new THREE.Audio(listener);
  }

  setLoader() {
    this.loader = new THREE.AudioLoader();
  }

  setMusic(path) {
    // "audio/pirates-black-pearl.mp3",
    this.loader.load(
      path,
      (buffer) => {

        this.sound.setBuffer(buffer);
        this.sound.setLoop(true);
        this.sound.setVolume(0.8);
        if (!this.sound.isPlaying) {
        //   this.sound.play();
        }
      },
      function (err) {
        console.log("progress");
      },
      function (err) {
        console.log("An error happened", err);
      }
    );
  }
}
