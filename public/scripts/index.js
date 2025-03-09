import Player from "./classes/Player.js";
import Platform from "./classes/Platform.js";
import PlatformHandler from "./classes/PlatformHandler.js";
import InputHandler from "./classes/InputHandler.js";
import Background from "./classes/Background.js";

window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 1280;
    canvas.height = 480;
    const GRAVITY = 0.8;
    const MAX_VELOCITY = -20;

    const input = new InputHandler();
    const player = new Player(canvas.width,canvas.height);
    const bg = new Background(canvas.width,canvas.height);
    const levelOnePlatforms = [ 
        new Platform(canvas.width,canvas.height,200,20,100,20,false),
        new Platform(canvas.width,canvas.height,-200,100,100,20,false),
        new Platform(canvas.width,canvas.height,600,100,100,20,false),
        new Platform(canvas.width,canvas.height,1000,100,100,20,false),
        new Platform(canvas.width,canvas.height,1400,100,100,20,false),
        new Platform(canvas.width,canvas.height,-600,100,100,20,false),
        new Platform(canvas.width,canvas.height,-1000,canvas.height/2,canvas.width/3,canvas.height,false), // Left Wall
        new Platform(canvas.width,canvas.height,5000,canvas.height/2,canvas.width/3,canvas.height,false), // Right Wall
        new Platform(canvas.width,canvas.height,2000,0,6000,20,true) //Floor
    ];

    const platforms = new PlatformHandler(levelOnePlatforms);

    let lastTime = 0;

    const animate = (timestamp) => {
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        context.clearRect(0,0,canvas.width,canvas.height);
        bg.draw(context);
        bg.update(input,player);
        player.draw(context);
        player.update(input,GRAVITY,MAX_VELOCITY,platforms.platformsOnScreen);
        platforms.handle(context,input,player)
        requestAnimationFrame(animate);
    }

    animate(0);
    
});