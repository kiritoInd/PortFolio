import Experience from "./Experience.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


export default class Camera {
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControl();
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 7;
        this.perspectiveCamera.position.y = 6.3;
        this.perspectiveCamera.position.x = -4.3;
    }
    createOrthographicCamera() {
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        )
        this.orthographicCamera.position.y = 4.3;
        this.orthographicCamera.position.x = 1;
        this.orthographicCamera.rotation.z = -Math.PI / 6;
        this.orthographicCamera.position.z =7;

    }
    setOrbitControl() {
        this.control = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.control.enableDamping = false;
        this.control.enableZoom = false;
    }

    resize() {
        // update perspective camera resize
        this.perspectiveCamera.aspect = this.sizes.aspect
        this.perspectiveCamera.updateProjectionMatrix();

        // UPDATE orthographic camera on resize
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();

    }
  

    update() {
        this.control.update();
    }
}