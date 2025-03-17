import { drawBackground } from "../draw.js";

class Background {
    constructor({gameWidth,gameHeight,imageSrc}) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = imageSrc;
        this.x = 0;
        this.y = 0;
        this.width = gameWidth;
        this.height = gameHeight;
    }

    draw(ctx) {
        drawBackground(ctx,this.image,this.width,this.height,this.x,this.y,)
    }

    update(input,player) {
        // Horizontal Movement
        // this.dx = 0;
        // if ((input.keys.includes("ArrowRight") || input.keys.includes("ArrowLeft")) && player.atHorizontalBoundary) {
        //     this.dx -= (player.dx - 3 * Math.sign(player.dx));
        // }
        // this.x += this.dx;
        // if (this.x < 0 - this.width) { this.x = 0 }
        // if (this.x > 0 + this.width) { this.x = 0 }
    }
}

export default Background;