import Experience from "../Experience.js";
import * as THREE from "three";
// import Time from "../utils/Time.js";
// import Sizes from "../utils/Sizes.js";
import GSAP from "gsap";
import { EventEmitter } from "events";

export default class Room extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        // this.actualRoom.rotation.y = 0.5;
        
        // this.size
        this.device = this.sizes.device;
        this.sizes.on("switchdevice", (device) => {
            this.device = device;
        })
        this.actualRoom.position.x = 0
        this.actualRoom.position.z = 0
        this.actualRoom.position.y = 0
     

        this.roomChildren = {}
        


        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1
        }
        
        this.setModel();
        this.onMouseMove();
      
    }
   
    setModel(){
        console.log(this.actualRoom)
        this.scene.add(this.actualRoom);

        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
            if(child.name === "bed" || 
            child.name === "carpet" ||
            child.name === "Circle" ||
            child.name === "blanket" ||
            child.name === "boxboard" ||
            child.name === "blanket" ||
            child.name === "blanket" ||
           
            child.name === "futon" ||
            child.name === "c3" ||
            child.name === "c3001" ||
            child.name === "c8" ||
            child.name === "p1" ||
            child.name === "p2" ||
            child.name === "p3" ||
            child.name === "p4" ||
            child.name === "p5" ||
            child.name === "laptop" ||
            child.name === "table"){
                child.scale.set(0, 0, 0)
            }

           
            if(child.name === "floor1"){
                child.position.x = -7.74799 
            }
            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                })
            }
            this.roomChildren[child.name.toLowerCase()] = child;
            
        });

      

    }
    onMouseMove() {
        window.addEventListener("mousemove", (e) => {

            this.rotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.1;
        });
    }
    resize() {}


    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );
        
        this.time1 = this.experience.time.elapsed*0.00009
        
        this.actualRoom.rotation.y = this.lerp.current;
        // this.actualRoom.rotation.y =(this.time1)
    }
}