class PlatformHandler {
    constructor(platforms) {
        this.platforms = platforms
        this.platformsOnScreen = [];
    }

    add(platforms) {
        platforms.forEach(platform => {
            this.platforms.push(platform)
        })
    }

    remove(platforms) {
        platforms.forEach(platform => {
            this.platforms = this.platforms.filter((p) => p !== platform);
        })
    }

    handle(ctx,input,player) {
        this.platformsOnScreen = [];
        this.platforms.forEach(platform => {
            platform.draw(ctx);
            platform.update(input,player);
            if (platform.onScreen) {
                this.platformsOnScreen.push(platform)
            }
        });
    }
}

export default PlatformHandler;