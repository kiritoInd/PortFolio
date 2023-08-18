import { EventEmitter } from "events";

export default class Sizes extends EventEmitter {
    constructor() {
        super();
        this.minWidth = 300;
        this.maxWidth = 1000;
        this.minHeight = 200;
        this.maxHeight = 800;
        
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
        this.frustrum = 5;
        if (this.width < 968) {
            this.device = "mobile";
        } else {
            this.device = "desktop";
        }
        this.resizeTimeout = null; // Variable to hold the timeout reference
        
        window.addEventListener("resize", () => {
            clearTimeout(this.resizeTimeout); // Clear any existing timeout
            this.resizeTimeout = setTimeout(() => {
                this.width = Math.min(Math.max(window.innerWidth, this.minWidth), this.maxWidth);
                this.height = Math.min(Math.max(window.innerHeight, this.minHeight), this.maxHeight);
                this.aspect = this.width / this.height;
                this.pixelRatio = Math.min(window.devicePixelRatio, 2);
                this.emit("resize");
                if (this.width < 968 && this.device !== "mobile") {
                    this.device = "mobile";
                    this.emit("switchdevice", this.device);
                    console.log("mobile");
                } else if (this.width >= 968 && this.device !== "desktop") {
                    this.device = "desktop";
                    this.emit("switchdevice", this.device);
                    console.log("desktop");
                }
            }, 2); // Debounce time in milliseconds
        });
    }
}
