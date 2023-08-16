    import Particles from './particles.js';
    export default class Effect{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.particles = [];
            this.numberOfParticles = 600;
            this.cellSize = 29;
            this.rows;
            this.cols;
            this.flowField = [];
            this.curve = 1.9;
            this.zoom = 0.3;
            this.init();

        }
        init(){
            this.rows = Math.floor(this.height / this.cellSize);
            this.cols = Math.floor(this.width / this.cellSize);
            this.flowField = [];

            for (let y = 0; y < this.rows; y++)
            {
                for (let x = 0; x < this.cols; x++)
                {
                    let angle = (Math.cos(x* this.zoom)+Math.sin(y*this.zoom))* this.curve;
                    this.flowField.push(angle);
                }
            }

            for (let i = 0; i < this.numberOfParticles; i++)
            {
                this.particles.push(new Particles(this));
            }
        }
        renderParticles(context) {
            // context.clearRect(0, 0, this.width, this.height); // Clear the canvas
            this.particles.forEach(particle => {
                particle.draw(context);
            });
        }
        
        resize() {

        }


        update() {
            this.particles.forEach(particle => {
                particle.update();
            });
        
        }

    }