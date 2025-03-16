class Camera {
    constructor({gameWidth,gameHeight,initalY}) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.speed = 5;
        this.width = gameWidth - 600;
        this.height = gameHeight - 100;
    }

    update(input,player) {
        this.dx = 0;
        if ((input.keys.includes("ArrowRight") || input.keys.includes("ArrowLeft")) && player.atHorizontalBoundary) {
            this.dx += player.dx;
        }
        this.x += this.dx;

        this.dy = 0;
        if (player.atVerticalBoundary) {
            if (player.dx > 0) {
                this.dy += this.speed;
            } else {
                this.dy += player.dy;
            }
        }
        this.y += this.dy;
    }
}

export default Camera;