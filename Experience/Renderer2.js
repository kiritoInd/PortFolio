import * as THREE from "three";
import Experience from "./Experience.js";
export default class Renderer2 {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene2;
        this.canvas = this.experience.canvas3;
        this.camera = this.experience.camera;

        // console.log(this.camera, this.camera.perspectiveCamera);
        this.setRenderer();
        
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            // webgl2: false,
            canvas: this.canvas,
            antialias: true,
            // alpha: true,
        });
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.shadowMap.enabled = true;
        this.renderer.toneMappingExposure = 1.2;
        this.renderer.shadowMap.enabled = true;
        this.renderer.autoClear = false;
        this.renderer.autoResize = false;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {
        this.renderer.setViewport(0, 0, this.sizes.width, this.sizes.height)
        this.renderer.render(this.scene, this.camera.perspectiveCamera)
        this.renderer.setViewport(this.sizes.width - this.sizes.width / 3,
            this.sizes.height - this.sizes.height / 3,
            this.sizes.width / 3, this.sizes.height / 3);
    }
}