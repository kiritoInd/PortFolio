import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";




export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.time;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;
        this.roomchildren = this.experience.world.room.roomChildren
        this.sunlight = this.experience.world.environment.sunLight;
        GSAP.registerPlugin(ScrollTrigger);
        this.setPath();
        // this.setraycaster();
    }
    
    setPath(){
      ScrollTrigger.matchMedia({ 
        "(min-width: 969px)":() =>{
          this.room.position.set(-3, 1, 0);
          this.room.scale.set(0.6, 0.6, 0.6);

          
      },
      "(max-width: 1208px)": () => {
        this.room.scale.set(0.5, 0.5, 0.5);
        this.room.position.set(-2, 0.5, 0);

      } ,
      "(max-width: 968px)": () => {
        this.room.scale.set(0.4, 0.4, 0.4);

        this.room.position.set(-2, 0.5, 0);

      },
      "(max-width: 768px)": () => {
        this.room.scale.set(0.4, 0.4, 0.4);

        this.room.position.set(-0, 1.3, 0);

      } 
       })
        // console.log(this.roomchildren)
        this.timeline = GSAP.timeline({

        })
        
          .to(this.roomchildren.floor1.position, {
            x: -0.12817,
           
            // ease: "back.out(2)",
            duration: 0.5, // Set the duration to 2 seconds for the bed animation
          })
          .to(this.roomchildren.bed.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            ease: "back.out(2)",
            duration: 0.4, // Set the duration to 2 seconds for the bed animation
          })
          .to(this.roomchildren.futon.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            ease: "back.out(2)",
            duration: 0.4, // Set the duration to 0.9 seconds for the futon animation
          },"bed")
          .to(this.roomchildren.carpet.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            ease: "back.out(2)",
            duration: 0.3, // Set the duration to 0.9 seconds for the carpet animation
          },"carpet")
          .to(this.roomchildren.boxboard.scale, {
            x: 0.958962,
            z: 0.265839,
            y: 0.358945,
            ease: "back.out(2)",
            duration: 0.3, // Set the duration to 0.9 seconds for the carpet animation
          },"carpet")
          .to(this.roomchildren.p3.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            ease: "back.out(2)",
            duration: 0.3, // Set the duration to 0.9 seconds for the carpet animation
          },"pillow1")
          .to(this.roomchildren.p4.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            ease: "back.out(2)",
            duration: 0.3, // Set the duration to 0.9 seconds for the carpet animation
          },"pillow1")
          .to(this.roomchildren.p1.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            ease: "back.out(2)",
            duration: 0.3, // Set the duration to 0.9 seconds for the carpet animation
          })
          .to(this.roomchildren.p2.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            ease: "back.out(2)",
            duration: 0.5, // Set the duration to 0.9 seconds for the carpet animation
          })
          .to(this.roomchildren.p5.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            ease: "back.out(2)",
            duration: 0.5, // Set the duration to 0.9 seconds for the carpet animation
          })
          .to(this.roomchildren.blanket.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            duration: 0.3,
            ease: "back.out(2)",
             // Set the duration to 0.9 seconds for the carpet animation
          },"bed")
          .to(this.roomchildren.table.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            duration: 0.5,
            ease: "back.out(2)",
             // Set the duration to 0.9 seconds for the carpet animation
          },"t1")
          .to(this.roomchildren.table.rotation, {
        
          
            y: Math.PI*2.3,
            duration: 0.5,
            ease: "back.out(1)",
             // Set the duration to 0.9 seconds for the carpet animation
          },"t1")
          .to(this.roomchildren.laptop.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            duration: 0.3,
            ease: "back.out(2)",
             // Set the duration to 0.9 seconds for the carpet animation
          },"tabletops")
          .to(this.roomchildren.c3.scale, {
            x: 0.085324,
            z: 0.129827,
            y: 0.014555 ,
            duration: 0.3,
            ease: "back.out(2)",
             // Set the duration to 0.9 seconds for the carpet animation
          },"tabletops")
          .to(this.roomchildren.c3001.scale, {
            x: 0.085324,
            z: 0.129827,
            y: 0.014555 ,
            duration: 0.3,
            ease: "back.out(2)",
             // Set the duration to 0.9 seconds for the carpet animation
          },"tabletops")
          .to(this.roomchildren.c8.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            duration: 0.3,
            ease: "back.out(2)",
             // Set the duration to 0.9 seconds for the carpet animation
          },"tabletops")
          .to(this.roomchildren.circle.scale, {
            x: 1.0,
            z: 1.0,
            y: 1.0,
            duration: 0.3,
            ease: "back.out(2)",
             // Set the duration to 0.9 seconds for the carpet animation
          },"tabletops")
          
     

}

    resize() {

    }

    update() {

    }
}