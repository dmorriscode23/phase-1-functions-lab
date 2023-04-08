//Distance from Hq In Blocks 
function distanceFromHqInBlocks(blocks){
    if (blocks > 42) {
        return blocks - 42;
    } else if (blocks < 42) {
        return 42 -  blocks;
    }
}

//Distance From Hq In Feet
function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
}

//distance Travelled In Feet
function distanceTravelledInFeet(start, destination) {
    if (start, destination > 42) {
        return (destination - start) * 264;
    }else if (start, destination < 42) {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500){
        return 25;
    } else if (distance >= 2500) {
        return "cannot travel that far";
    }
}