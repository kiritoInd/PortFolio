import { color } from "framer-motion";
import Experience from "../Experience.js";
import * as THREE from "three";
import GSAP from "gsap";
export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene2;
      this.setFloor();

    }
 
    setFloor() {
        this.geometry = new THREE.PlaneGeometry(5, 5.3);
        this.material = new THREE.MeshStandardMaterial({
        toneMapped: true,
        color: 0x000, // Set your desired color here (white in this example)
        emissive: 0x000,
        opacity: 1,    // Set the opacity value (0.0 to 1.0, where 0.0 is fully transparent and 1.0 is fully opaque)
        transparent: true, // Enable transparency
        });
        this.plane = new THREE.Mesh(this.geometry, this.material);
        // this.scene.add(this.plane)   
        this.plane.rotation.x = -Math.PI / 2;
        this.plane.rotation.z = Math.PI / 2;
        this.plane.position.y = -0.5
        this.plane.position.z = -0.6
        this.plane.position.x = -1.6
        //    this.plane.receiveShadow = true;
        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1
        }


    }


    resize() {

    }
    update() {
  

    }
}