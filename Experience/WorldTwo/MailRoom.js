import Experience from "../Experience.js";
import * as THREE from "three";
// import Time from "../utils/Time.js";
import GSAP from "gsap";

export default class MailRoom {
    constructor() {
      
        this.experience = new Experience();
        this.scene = this.experience.scene2;
       
        this.resources = this.experience.resources;
        this.room = this.resources.items2.mailroom;
        this.actualMailRoom = this.room.scene;
        
        this.actualMailRoom.position.x = -1.6
        this.actualMailRoom.position.z = 0
        this.actualMailRoom.position.y = -0.4
        // this.actualMailRoom.rotation._y = 1;
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
        // console.log(this.actualMailRoom)
        this.scene.add(this.actualMailRoom);
        this.actualMailRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
            if(child.name === "box1" || 
            child.name === "box2" ||
            child.name === "box3" ||
            child.name === "mail1" ||
            child.name === "mail2" ||
            child.name === "mail3" ||
            child.name === "MailBox"||
            child.name === "plant1" ||
            child.name === "plant2" ){
                child.scale.set(0, 0, 0)
            }

          
            if(child.name === "floor2"){
                child.position.x = -9.52644 
                child.position.z = -19.42472 
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
        
        this.actualMailRoom.rotation.y = this.lerp.current;
        // this.actualRoom.rotation.y =(this.time1)
    }
}