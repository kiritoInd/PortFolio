import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import { EventEmitter } from "events";
import Galaxy from "./Galaxy.js";

export default class WorldThree extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene4;
        this.canvas = this.experience.canvas2;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        
        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.galaxy = new Galaxy();
            

        });
    }
    resize() {}
    update() {
       if(this.galaxy){
              this.galaxy.update();
       }
  
        if(this.controls){
            this.controls.update();
        }
    }
}