import * as THREE from "three"
import Sizes from "./utils/Sizes"
import Time from "./utils/Time.js"
import Resources from "./utils/Resources.js"
import assets from "./utils/assets.js"
import Camera from "./Camera.js"
import Renderer from "./Renderer.js"
import World from "./World/World.js"
import FlowField from "./FlowField/FlowFIeld.js"
import Theme from "./Theme.js"
import Renderer2 from "./Renderer2"
import WorldTwo from "./WorldTwo/WorldTwo"




export default class Experience{
    static instance;
    constructor(canvas1, canvas2 , canvas3){
       if(Experience.instance){
        return Experience.instance
       }
       Experience.instance = this
       this.canvas = canvas1;
       this.canvas2 = canvas2;
       this.canvas3 = canvas3;
       this.scene = new THREE.Scene();
       this.scene2 = new THREE.Scene();
       this.time = new Time();
       this.sizes = new Sizes();
       this.camera = new Camera();
       this.renderer2 = new Renderer2();
       this.renderer = new Renderer();
       this.flowField = new FlowField();
       this.resources = new Resources(assets);
       this.theme = new Theme();
       this.world = new World();
       this.world2 = new WorldTwo(); 
       
      

       this.sizes.on("resize", () => {

        this.resize();
    })
    this.time.on("update", () => {
   
        this.update();
    })
    }


    resize() {
        this.camera.resize();
        this.flowField.resize();
        this.renderer.resize();
        this.world.resize();
        this.renderer2.resize();
        this.world2.resize();




    }

    update(){
        this.flowField.update();
        this.camera.update();
        this.renderer.update();
        this.world.update();
        this.renderer2.update();
        this.world2.update();


    
    }



}