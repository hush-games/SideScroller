import { drawPlatform } from "../draw.js";

class Platform {
    constructor(gameWidth,gameHeight,initialX,initialY,width,height) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.x = initialX;
        this.y = initialY;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        drawPlatform(ctx,this.gameWidth,this.gameHeight,this.width,this.height,this.x,this.y)
    }

    update(input,player) {
        // Horizontal Movement
        this.dx = 0;
        if (input.keys.includes("ArrowRight") && player.atBoundary) {
            this.dx -= 5;
        }
        if (input.keys.includes("ArrowLeft") && player.atBoundary) {
            this.dx += 5
        }
        this.x += this.dx;
    }
}

export default Platform;