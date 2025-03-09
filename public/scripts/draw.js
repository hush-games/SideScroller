const getCanvasCoords = (gameWidth,gameHeight,objectHeight,x,y) => {
    return [ (gameWidth/2) + x , gameHeight - y]
}

export const drawPlayer = (ctx,gameWidth,gameHeight,playerWidth,playerHeight,x,y) => {
    let [ canvasX, canvasY ] = getCanvasCoords(gameWidth,gameHeight,playerHeight,x,y);
    ctx.beginPath();
    ctx.rect(canvasX - (playerWidth/2), canvasY - (playerHeight/2), playerWidth, playerHeight);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

export const drawPlatform = (ctx,gameWidth,gameHeight,platformWidth,platformHeight,x,y) => {
    let [ canvasX, canvasY ] = getCanvasCoords(gameWidth,gameHeight,platformHeight,x,y);
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