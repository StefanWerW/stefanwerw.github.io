import "p5/lib/addons/p5.dom"
export default function sketch (p) {
    let canvas;
    let dots = [];
    const dotsSize = 50;
    const linkSize = 100;
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style('z-index', '-1');
        createDots();
    };

    p.draw = () => {
        p.background(255);

        dots.forEach(e => e.update());
        dots.forEach(e => e.draw());

        //console.log(p.frameRate());
    };

    const createDots = () => {
        for (var i = 0; i < dotsSize; i++) {
            dots[i] = new Dot();
        }
    }

    class Dot{
        constructor(){
            this.pos = p.createVector(p.random(0, canvas.width), p.random(0, canvas.height));
            this.vel = p.createVector(p.random(-1.0, 1.0), p.random(-1.0, 1.0));
        }

        update() {
            this.pos.add(this.vel);

            if(this.pos.x > canvas.width || this.pos.x < 0){
                this.vel.x *= -1;
                this.pos.x = p.max(0, p.min(canvas.width, this.pos.x));
            }
            if(this.pos.y > canvas.height || this.pos.y < 0){
                this.vel.y *= -1;
                this.pos.y = p.max(0, p.min(canvas.height, this.pos.y));
            }
        }

        draw() {
            p.ellipse(this.pos.x, this.pos.y, 3, 3);
            p.stroke(30, 100)
            dots.slice(dots.indexOf(this) + 1).forEach(e => {
                if(e.pos.dist(this.pos) < canvas.width/4){
                    p.line(e.pos.x, e.pos.y, this.pos.x, this.pos.y)
                }
            });
        }
    }
};
