import { drawPlatform } from "../draw.js";

class Platform {
    constructor(gameWidth,gameHeight,initialX,initialY,width,height,alwaysRender) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.alwaysRender = alwaysRender
        this.x = initialX;
        this.y = initialY;
        this.width = width;
        this.height = height;
        this.onScreen = true;
    }

    draw(ctx) {
        if (this.onScreen) {
            drawPlatform(ctx,this.gameWidth,this.gameHeight,this.width,this.height,this.x,this.y)
        }
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

        if (!this.alwaysRender && (this.x > (player.x + this.gameWidth) || this.x < (player.x - this.gameWidth))) {
            this.onScreen = false;
        } else {
            this.onScreen = true;
        }

    }
}

export default Platform;