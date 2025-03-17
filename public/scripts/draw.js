const getCanvasCoords = (gameWidth,gameHeight,camera,x,y) => {
    return [ (gameWidth/2) + x - camera.x, gameHeight - y + camera.y]
}

export const drawPlayer = (ctx,gameWidth,gameHeight,camera,playerWidth,playerHeight,x,y) => {
    let [ canvasX, canvasY ] = getCanvasCoords(gameWidth,gameHeight,camera,x,y);
    ctx.beginPath();
    ctx.rect(canvasX - (playerWidth/2), canvasY - (playerHeight/2), playerWidth, playerHeight);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

export const drawPlatform = (ctx,gameWidth,gameHeight,camera,platformWidth,platformHeight,x,y) => {
    let [ canvasX, canvasY ] = getCanvasCoords(gameWidth,gameHeight,camera,x,y);
    //if (x===200) console.log(canvasY)
    ctx.beginPath();
    ctx.rect(canvasX - (platformWidth/2), canvasY - (platformHeight/2), platformWidth, platformHeight);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

export const drawBackground = (ctx,image,backgroundWidth,backgroundHeight,x,y) => {
    ctx.drawImage(image,x,y,backgroundWidth,backgroundHeight)
    ctx.drawImage(image,x + backgroundWidth,y,backgroundWidth,backgroundHeight)
    ctx.drawImage(image,x - backgroundWidth,y,backgroundWidth,backgroundHeight)
}