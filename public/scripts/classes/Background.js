class Background {
    constructor(gameWidth,gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = document.getElementById("background");
        this.x = 0;
        this.y = 0;
        this.width = 640;
        this.height = 480;
    }

    draw(ctx) {
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x - this.width,this.y,this.width,this.height)
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
        if (this.x < 0 - this.width) { this.x = 0 }
        if (this.x > 0 + this.width) { this.x = 0 }
    }
}

export default Background;