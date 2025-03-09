import { drawPlatform } from "../draw.js";

class Platform {
    constructor({gameWidth,gameHeight,initialX,initialY,width,height,type = 'platform'}) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.type = type;
        this.x = initialX;
        this.y = initialY;
        this.dx = 0;
        this.dy = 0;
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
        if ((input.keys.includes("ArrowRight") || input.keys.includes("ArrowLeft")) && player.atHorizontalBoundary) {
            this.dx -= player.dx;
        }
        this.x += this.dx;

        this.dy = 0;
        if (player.atVerticalBoundary) {
            this.dy -= player.dy;
        }
        this.y += this.dy;

        if (this.type !== 'floor' && (this.x > (player.x + this.gameWidth) || this.x < (player.x - this.gameWidth))) {
            this.onScreen = false;
        } else {
            this.onScreen = true;
        }

    }
}

export default Platform;