const collision = (obj1, obj2) => {
    return (Math.abs(obj1.y - obj2.y) < obj1.height/2 + obj2.height/2 && Math.abs(obj1.x - obj2.x) < obj1.width/2 + obj2.width/2) ? true : false;
}

export default collision;