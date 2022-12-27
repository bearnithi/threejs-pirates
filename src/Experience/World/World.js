import { Experience } from "../Experience";
import BlackPearl from "./BlackPearl";
import Environment from "./Environment";
import Moon from "./Moon";
import Sea from "./Sea";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.resources.on('ready', () => {
            this.sea = new Sea();
            this.blackPearl = new BlackPearl();
            this.moon = new Moon();
            this.environment = new Environment();
            this.environment.setLightTarget(this.moon.mesh);
        })
    }

    update() {
        if(this.sea) {
            this.sea.update();
        }

        if(this.blackPearl) {
            this.blackPearl.update();
        }
    }


}