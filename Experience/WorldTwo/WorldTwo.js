
import Experience from "../Experience.js";
import MailRoom from "./MailRoom.js";
import Environment from "./Environment.js";
import ControlsTwo from "./controls.js"


export default class WorldTwo {
    constructor() {
      
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene2;
        
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        
        this.resources.on("ready", () => {
            this.environment = new Environment();
            
            // this.floor = new Floor();
            this.room = new MailRoom();
            this.Controls = new ControlsTwo();

        });
    }
    resize() {}
    update() {
        if(this.room){
            this.room.update();
        }
        if(this.floor){
            this.floor.update();
        }
        if(this.controls){
            this.controls.update();
        }
    }
}