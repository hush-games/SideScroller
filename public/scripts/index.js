import Player from "./classes/Player.js";
import Platform from "./classes/Platform.js";
import PlatformHandler from "./classes/PlatformHandler.js";
import InputHandler from "./classes/InputHandler.js";
import Background from "./classes/Background.js";


const scale = window.devicePixelRatio

window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const w = 1280;
    const h = 480;
    canvas.style.width = w;
    canvas.style.height = h;
    canvas.width = w * scale;
    canvas.height = h * scale;
    const GRAVITY = 0.8;
    const MAX_VELOCITY = -15;

    const bgImg = document.getElementById("background");

    const input = new InputHandler();
    const player = new Player({gameWidth:canvas.width,gameHeight:canvas.height});
    const bg = new Background({
        gameWidth: canvas.width,
        gameHeight:  canvas.height,
        imageSrc: bgImg
    });
    const levelOnePlatforms = [ 
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: 200,
            initialY: 100,
            width: 100,
            height: 20}),
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: 400,
            initialY: 200,
            width: 100,
            height: 20}),
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: 600,
            initialY: 300,
            width: 100,
            height: 20}),
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: 800,
            initialY: 400,
            width: 100,
            height: 20}),
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: 1000,
            initialY: 500,
            width: 100,
            height: 20}),
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: 1500,
            initialY: canvas.height/2 + 15,
            width: 400,
            height: canvas.height}),
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: 2000,
            initialY: 0,
            width: 6000,
            height: 30,
            type: 'floor'}),
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: -1000,
            initialY: canvas.height/2,
            width: canvas.width/3,
            height: canvas.height}),
        new Platform({
            gameWidth: canvas.width,
            gameHeight: canvas.height,
            initialX: 5000,
            initialY: canvas.height/2,
            width: canvas.width/3,
            height: canvas.height})
    ];

    const platforms = new PlatformHandler(levelOnePlatforms);

    let lastTime = 0;

    const animate = (timestamp) => {
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        context.clearRect(0,0,canvas.width,canvas.height);
        bg.draw(context);
        bg.update(input,player);
        platforms.handle(context,input,player)
        player.draw(context);
        player.update(input,GRAVITY,MAX_VELOCITY,platforms.platformsOnScreen);
        requestAnimationFrame(animate);
    }

    animate(0);
    
});