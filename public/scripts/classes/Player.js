import { drawPlayer } from '../draw.js'

class Player {
    constructor(gameWidth,gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        // Constants
        this.width = 40;
        this.height = 60;

        // Variables
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.atBoundary = false;
    }

    draw(ctx) {
        drawPlayer(ctx,this.gameWidth,this.gameHeight,this.width,this.height,this.x,this.y);
    }

    update(input) {
        // Horizontal Movement
        this.dx = 0;
        this.atBoundary = false;
        if (input.keys.includes("ArrowRight")) {
            this.dx += 5;
        }
        if (input.keys.includes("ArrowLeft")) {
            this.dx -= 5
        }
        this.x += this.dx;
        if (this.x > (this.gameWidth/3)) { 
            this.x = this.gameWidth/3 
            this.atBoundary = true;
        }
        if (this.x < (-this.gameWidth/3)) { 
            this.x = -this.gameWidth/3 
            this.atBoundary = true;
        }
    }
}

export default Player;