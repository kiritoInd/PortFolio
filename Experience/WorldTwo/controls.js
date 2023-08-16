import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";




export default class ControlsTwo {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene2;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.time;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world2.room.actualMailRoom;
        this.roomchildren = this.experience.world2.room.roomChildren
        this.sunlight = this.experience.world.environment.sunLight;
        GSAP.registerPlugin(ScrollTrigger);
        this.setPath();
    }
    
    setPath(){
      ScrollTrigger.matchMedia({ 
        "(min-width: 969px)":() =>{
          this.room.position.set(-3, 0, 0);
          this.room.scale.set(0.6, 0.6, 0.6);

          
      },
      "(max-width: 1208px)": () => {
        this.room.scale.set(0.5, 0.5, 0.5);
        this.room.position.set(-2.5, 0.5, 0);

      } ,
      "(max-width: 968px)": () => {
        this.room.scale.set(0.35, 0.35, 0.35);
        this.room.position.set(-0.1, 1.2, 0);

      } 
       })
        console.log(this.roomchildren)
        this.timeline = GSAP.timeline({
            scrollTrigger: {
                trigger: ".second-move",
                start: "top top",
            }

        })
        .to(this.roomchildren.floor2.position, {
            x: 0.0580309 ,
            z: 0.192805 ,
             // Set the duration to 0.9 seconds for the carpet animation
          },)
        .to(this.roomchildren.mailbox.scale, {
            x: -0.17814388871192932,
            y:  -1.303970456123352,
            z:-0.17814388871192932,
            duration: 0.3,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },"mailbox")
        .to(this.roomchildren.mailbox.rotation, {
            y: Math.PI*2.4,
            duration: 0.6,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },"mailbox")
        .to(this.roomchildren.box1.scale, {
            x: 0.85203,
            y: 0.531538,
            z: 0.531538,
            duration: 0.3,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },)
        .to(this.roomchildren.box2.scale, {
            x: 0.640948,
            y: 0.399855,
            z: 0.399855,
            duration: 0.3,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },"smaw")
        .to(this.roomchildren.box2.position, {
           
            y: 0.2,
            ease: "back.out(1)",
         
        
             // Set the duration to 0.9 seconds for the carpet animation
          },"smaw")
        .to(this.roomchildren.box3.scale, {
            x: 0.259642,
            y: 0.161977,
            z: 0.161977,
            duration: 0.3,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },"same1")
        .to(this.roomchildren.mail1.scale, {
            x: -0.265676,
            y: -0.50342,
            z:-0.50342,
            duration: 0.3,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },)
        .to(this.roomchildren.mail3.scale, {
            x: -0.265676,
            y: -0.50342,
            z: -0.50342,
            duration: 0.34,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },"same1")
        .to(this.roomchildren.mail2.scale, {
            x: -0.311886,
            y: -0.590982,
            z: -0.590982,
            duration: 0.3,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },"same1")
        .to(this.roomchildren.plant2.scale, {
            x: 0.289432,
            y: 0.289433,
            z: 0.289433,
            duration: 0.35,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },)
        .to(this.roomchildren.plant1.scale, {
            x: 0.845605,
            y: 0.845605,
            z:0.845605 ,
            duration: 0.3,
            ease: "back.out(1)",

             // Set the duration to 0.9 seconds for the carpet animation
          },)
          
   
}

    resize() {

    }

    update() {

    }
}