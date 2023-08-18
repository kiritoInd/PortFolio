import Experience from "../Experience.js";
import * as THREE from "three";
export default class Galaxy {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene4;
        //   this.setFloor();
        this.setGalaxy();

    }


    setGalaxy() {
        const parameters = {}
        parameters.count = 1000
        parameters.size = 0.04
        parameters.radius = 5
        parameters.branches = 3
        parameters.spin = 10
        parameters.randomness = 0.2
        parameters.randomnessPower = 1
        parameters.insideColor = "#000"
        parameters.outsideColor = "#1b3984"



        // particles

        let geometry = null
        let material = null
        let points = null


        const generateGalaxy = () => {
            if (points != null) {
                geometry.dispose()
                material.dispose() //three js documentation
                scene.remove(points)
            }

            geometry = new THREE.BufferGeometry();

            const positions = new Float32Array(parameters.count * 3)
            const colors = new Float32Array(parameters.count * 3)

            const colorInside = new THREE.Color(parameters.insideColor)
            const colorOutside = new THREE.Color(parameters.outsideColor)



            for (let i = 0; i < parameters.count; i++) {

                const i3 = i * 3
                const radius = Math.random() * parameters.radius
                const spinAngle = radius * parameters.spin
                const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2

                const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
                const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1.5 : -1)
                const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)

                positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
                positions[i3 + 1] = randomY
                positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ


                //color

                const mixedColor = colorInside.clone()
                mixedColor.lerp(colorOutside, radius / parameters.radius)

                colors[i3] = mixedColor.r
                colors[i3 + 1] = mixedColor.g
                colors[i3 + 2] = mixedColor.b
            }

            geometry.setAttribute(
                'position',
                new THREE.BufferAttribute(positions, 3)
            )
            geometry.setAttribute(
                'color',
                new THREE.BufferAttribute(colors, 3)
            )
            /**
             * material
             */
            material = new THREE.PointsMaterial({
                size: parameters.size,
                sizeAttenuation: true,
                depthWrite: true,
                blending: THREE.AdditiveBlending,
                vertexColors: true,
            })
            this.points = new THREE.Points(geometry, material)
            this.scene.add(this.points)
        }
        generateGalaxy()
    }

    resize() {

    }
    update() {
        this.time = this.experience.time.elapsed * 0.0009
        this.points.rotation.y = this.time * 0.29
    }
}