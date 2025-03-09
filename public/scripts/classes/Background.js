import { drawBackground } from "../draw.js";

class Background {
    constructor(gameWidth,gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = document.getElementById("background");
        this.x = 0;
        this.y = 0;
        this.width = 1280;
        this.height = 480;
    }

    draw(ctx) {
        drawBackground(ctx,this.image,this.width,this.height,this.x,this.y,)
    }

    update(input,player) {
        // Horizontal Movement
        this.dx = 0;
        if (input.keys.includes("ArrowRight") && player.atBoundary) {
            this.dx -= 2;
        }
        if (input.keys.includes("ArrowLeft") && player.atBoundary) {
            this.dx += 2;
        }
        this.x += this.dx;
        if (this.x < 0 - this.width) { this.x = 0 }
        if (this.x > 0 + this.width) { this.x = 0 }
    }
}

export default Background;