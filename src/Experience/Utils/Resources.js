import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter {
    constructor(sources) {
        super();
        this.sources = sources;
        this.items = {};
        this.toLoad = this.sources.length;
        this.loaded = 0;

        this.setLoaders();
        this.loadModels();
    }

    setLoaders() {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
    }

    loadModels() {
        for(let model of this.sources) {
            if(model.type === 'gltf') {
                this.loaders.gltfLoader.load(model.path, (loadedModel) => {
                    this.setModel(model.name, loadedModel);
                })
            }
        }
    }

    setModel(name, model) {
        this.items[name] = model;
        this.loaded++;

        if(this.toLoad === this.loaded) {
            this.trigger('ready');
        }
    }
}