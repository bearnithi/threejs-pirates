import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
    constructor() {
        super();
        this.calcWidthHeightPixelRatio();

        window.addEventListener('resize', () => {
            this.calcWidthHeightPixelRatio();

            this.trigger('resize');
        });
    }

    calcWidthHeightPixelRatio() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    }
}