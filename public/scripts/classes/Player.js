import { drawPlayer } from '../draw.js'
import collision from '../utils/collision.js';

class Player {
    constructor(gameWidth,gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        // Constants
        this.width = 40;
        this.height = 60;
        this.speed = 5;
        this.jumpSpeed = 15;

        // Variables
        this.x = 0;
        this.y = this.height;
        this.dx = 0;
        this.dy = 0;
        this.landX = 0;
        this.landy = 0;
        // Booleans
        this.atHorizontalBoundary = false;
        this.atVerticalBoundary = false;
        this.onGround = true;
        this.collisionObj = undefined;
    }

    draw(ctx) {
        drawPlayer(ctx,this.gameWidth,this.gameHeight,this.width,this.height,this.x,this.y);
    }

    update(input,gravity,maxVelocity,platforms) {
        // Vertical Movement
        this.dy = Math.max(this.dy - gravity, maxVelocity)
        if (this.onGround) {
            this.dy = -1;
            if (input.keys.includes("Space")) {
                this.dy = this.jumpSpeed;
                this.onGround = false;
            }
        }

        this.y += this.dy;

        this.checkVerticalCollision(platforms)
        
        this.atVerticalBoundary = false;
        if (this.y > 4*this.gameHeight/5) { 
            this.y = 4*this.gameHeight/5;
            this.atVerticalBoundary = true;
        } else if (this.y < this.height/2 + 10) { 
            this.y = this.height/2 + 10;
            this.atVerticalBoundary = true;
        }

        // Horizontal Movement
        this.dx = 0;
        this.atHorizontalBoundary = false;
        if (input.keys.includes("ArrowRight")) {
            this.dx += this.speed;
        }
        if (input.keys.includes("ArrowLeft")) {
            this.dx -= this.speed;
        }
        this.x += this.dx;

        if (this.x > (this.gameWidth/3)) { 
            this.x = this.gameWidth/3 
            this.atHorizontalBoundary = true;
        } else if (this.x < (-this.gameWidth/3)) { 
            this.x = -this.gameWidth/3 
            this.atHorizontalBoundary = true;
        }

        this.checkHorizontalCollision(platforms);
    }

    checkHorizontalCollision(platforms) {
        this.collisionObj = undefined;
        platforms.forEach(p => {
            if (collision(this,p)) {
                this.collisionObj = p;
                return;
            }
        })

        if (this.collisionObj && this.dx !== 0) {
            this.x = this.collisionObj.x - (this.collisionObj.width/2 + this.width/2 + 0.01) * Math.sign(this.dx)
        }
    }

    checkVerticalCollision(platforms) {
        this.collisionObj = undefined;
        platforms.forEach(p => {
            if (collision(this,p)) {
                this.collisionObj = p;
                return;
            }
        })

        if (this.collisionObj && this.dy !== 0 && this.collisionObj.type !== 'wall') {
            this.y = this.collisionObj.y - (this.collisionObj.height/2 + this.height/2 + 0.01) * Math.sign(this.dy)
            if (this.dy < 0) {
                this.dy = -1;
                this.onGround = true;
            } else {
                this.dy = 0;
                this.onGround = false;
            }
        } else {
            this.onGround = false;
        }
    }
}

export default Player;