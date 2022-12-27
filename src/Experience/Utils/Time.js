import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
    constructor() {
        super();
        this.startTime = Date.now();
        this.currentTime = this.startTime;
        this.elapsedTime = 0;
        this.delta = 16;

        window.requestAnimationFrame(() => {
            this.tick();
        })
    }


    tick() {
        const currentTime = Date.now();
        this.delta = currentTime - this.currentTime;
        this.currentTime = currentTime;
        this.elapsedTime = this.currentTime - this.startTime;

        this.trigger('tick');

        window.requestAnimationFrame(() => {
            this.tick();
        })

    }
}