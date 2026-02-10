function random(min, max) {
    let rand = min + Math.random()*(max + 1 - min);
    return Math.floor(rand);
}

function randomInteger(min, max) {
    
}

alert(random(1, 2));