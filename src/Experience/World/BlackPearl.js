import { Experience } from "../Experience";
import SceneAudioPlayer from "../Utils/AudioPlayer";

export default class BlackPearl {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.audio = new SceneAudioPlayer();

    this.show = false;

    this.setModel();

    document.addEventListener("click", () => {
      this.show = true;
      this.triggerMusic();
    });
  }

  setModel() {
    this.instance = this.resources.items.blackpearl.scene;
    this.instance.scale.set(0.001, 0.001, 0.001);
    this.instance.position.set(-2, -4, -1);
    console.log(this.instance);
    this.scene.add(this.instance);
  }

  triggerMusic() {
    this.audio.setMusic("audio/pirates-black-pearl.mp3");
  }

  update() {
    if (this.show) {
        // console.log(Math.sin(this.time.elapsedTime));
    const delta = this.time.elapsedTime * 0.001;

    //   this.instance.rotation.x = Math.sin(delta * 0.1) * 0.5;
    //   this.instance.rotation.y = Math.sin(delta * 0.009) * 0.1;
      this.instance.position.y = Math.sin(delta * 0.5) * 0.9;
      this.instance.position.x += Math.sin(delta * 0.5) * 0.03;

    }
  }
}
