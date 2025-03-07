import Player from "./classes/Player.js";
import Platform from "./classes/Platform.js";
import InputHandler from "./classes/InputHandler.js";
import Background from "./classes/Background.js";

window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 640;
    canvas.height = 480;

    const GROUND = canvas.height;

    const input = new InputHandler();
    const player = new Player(canvas.width,canvas.height);
    const bg = new Background(canvas.width,canvas.height);
    const platformOne = new Platform(canvas.width,canvas.height,200,200,100,20);


    const animate = (timestamp) => {
        context.clearRect(0,0,canvas.width,canvas.height);
        bg.draw(context);
        bg.update(input,player);
        player.draw(context);
        player.update(input);
        platformOne.draw(context);
        platformOne.update(input,player);
        requestAnimationFrame(animate);
    }

    animate(0);
    
});