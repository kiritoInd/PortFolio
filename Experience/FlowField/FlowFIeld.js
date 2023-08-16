import Experience from "../Experience.js";
import Particles from "./particles.js";
import Effect from "./Effect.js";

export default class FLowField {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas2;
        this.ctx = this.canvas.getContext("2d");

        this.setCtx();
       
       

    }
    setCtx() {
      
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "white";
        // ctx.lineWidth = 2;
        // ctx.lineCap = "round";
        this.canvas.width = this.sizes.width;
        this.canvas.height = this.sizes.height;
        this.effect = new Effect(this.canvas.width+150, this.canvas.height);

        // console.log(this.effect);
        //canvas settings
    
    } 

   

    resize() {
        this.canvas.width = this.sizes.width+150;
        this.canvas.height = this.sizes.height;
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.effect.update();
        this.effect.renderParticles(this.ctx);

    }
 
}