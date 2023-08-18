import Experience from "../Experience.js";
import * as THREE from "three";

export default class Environment{
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene2;
        this.resources = this.experience.resources;
        this.setSunlight();
        
      
    }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight(0xffffff, 5);
        this.sunLight.castShadow = true;

        this.sunLight.shadow.camera.far = 7
        this.sunLight.shadow.mapSize.set = (1048, 1048);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(0, 2.3, 5);
        const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(this.sunLight);

        this.ambientlight = new THREE.AmbientLight("0xFFFfff", 2)
        // this.scene.add(this.ambientlight)
    }


    


    resize() {

    }
    update() {

    }
}