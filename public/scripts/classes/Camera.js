class Camera {
    constructor({gameWidth,gameHeight,initalY}) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.speed = 15;
        this.width = gameWidth - 600;
        this.height = gameHeight - 100;
    }

    update(input,player) {
        this.dx = 0;
        if ((input.keys.includes("ArrowRight") || input.keys.includes("ArrowLeft")) && player.atHorizontalBoundary) {
            this.dx += player.dx;
        }
        this.x += this.dx;

        if (player.atVerticalBoundary) {
            this.dy = Math.round(this.speed * (player.y - (this.y+200))/480);
        }
        this.y += this.dy;

        this.y = Math.max(0,this.y)
    }
}

export default Camera;