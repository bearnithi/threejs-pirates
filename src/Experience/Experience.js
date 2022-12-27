import * as THREE from 'three';
import Camera from './Components/Camera';
import Renderer from './Components/Renderer';
import sources from './Components/sources';
import Debug from './Utils/Debug';
import Resources from './Utils/Resources';
import Sizes from './Utils/Sizes';
import Time from './Utils/Time';
import World from './World/World';

let instance = null;
export class Experience {
    constructor(canvas) {

        if(instance) {
            return instance;
        }

        instance = this;
        window.Experience = this;
        this.canvas = canvas;

        this.debug = new Debug();
        this.sizes = new Sizes();
        this.time = new Time();

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.debug.debugObject.surfaceColor);

        this.camera = new Camera();
        this.resources = new Resources(sources);
        this.renderer = new Renderer();
        this.world = new World();

        this.sizes.on('resize', () => {
            this.resize();
        })

        this.time.on('tick', () => {
            this.update();
        })
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.world.update();
        this.camera.update();
        this.renderer.update();
    }
}