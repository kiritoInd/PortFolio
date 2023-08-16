import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import * as THREE from "three";
import Experience from "../Experience";


export default class Resources extends EventEmitter {
    constructor(assets) {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;
        this.assets = assets;

        this.items = {}; //object that will hold itmes
        this.items2 = {}; //object that will hold itmes
        this.queue = this.assets.length // how many itmen in queue to be loaded
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();

    }
    setLoaders() {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco")
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }

    startLoading() {
        for (const asset of this.assets) {
            if (asset.name == "room") {
                if (asset.type === "glbModel") {
                    this.loaders.gltfLoader.load(asset.path, (file) => {
                        this.singleAssetLoaded(asset.name,asset, file)
                    })
                }
            }
                if (asset.name == "mailroom") {
                    if (asset.type === "glbModel") {
                        this.loaders.gltfLoader.load(asset.path, (file) => {
                            this.singleAssetLoaded(asset.name,asset, file)
                        })
                    }   
                }
            
            if (asset.type === "vedioTexture") {
                this.video = {}
                this.videoTexture = {}

                this.video[asset.name] = document.createElement("video");
                this.video[asset.name].src = asset.path;
                this.video[asset.name].muted = true;
                this.video[asset.name].PlaysInline = true;
                this.video[asset.name].autoplay = true;
                this.video[asset.name].loop = true;
                this.video[asset.name].play()

                this.videoTexture[asset.name] = new THREE.VideoTexture(
                    this.video[asset.name]

                );

                this.videoTexture[asset.name].flipY = true;
                this.videoTexture[asset.name].minFilter = THREE.NearestFilter
                this.videoTexture[asset.name].magFilter = THREE.NearestFilter
                this.videoTexture[asset.name].generateMipmaps = false
                this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;

                this.singleAssetLoaded(asset.name,asset, this.videoTexture[asset.name])
            }
        }
    }

    singleAssetLoaded(name,asset, file) {
        if(name == "room"){
        this.items[asset.name] = file;
        this.loaded++;
        }
        if(name == "mailroom"){
        this.items2[asset.name] = file;
        this.loaded++;
        }
        if(name == "screen"){
        this.items[asset.name] = file;
        this.loaded++;
        }
      


        if (this.loaded === this.queue) {
            this.emit("ready");
        }
    }
}