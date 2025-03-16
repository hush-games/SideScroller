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

    draw(ctx,camera) {
        this.platformsOnScreen.forEach(platform => {
            platform.draw(ctx,camera);
        })
    }

    update(input,player) {
        this.platformsOnScreen = [];
        this.platforms.forEach(platform => {
            platform.update(input,player);
            if (platform.onScreen) {
                this.platformsOnScreen.push(platform)
            }
        });
    }


}

export default PlatformHandler;