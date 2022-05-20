//returns the number of blocks given a value
function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return (someValue - 42)
    } else if (someValue < 42) {
        return (42 - someValue)
    }
}

//Returns the number of feet from Scuber's headquarters to the pickup location. Use your distanceFromHqInBlocks function to help return the correct value here.
function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue) * 264)
}

//Calculates the number of feet a passenger travels given a starting block and an ending block — it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(start, destination) {
    if (destination >= start) {
        return ((destination-start) * 264)
    } else if (destination < start) {
        return ((start-destination) * 264)
    }
  }

function calculatesFarePrice(start, destination) {
    
    let totalTravelled = distanceTravelledInFeet(start, destination)
    
    if (totalTravelled <= 400) {
        return 0;
    } 
    else if (totalTravelled > 400 && totalTravelled < 2000) {
        return (totalTravelled- 400) * 0.02;
    } 
    else if (totalTravelled > 2000 && totalTravelled < 2500) {
        return 25;
    } 
    else if (totalTravelled > 2500) {
        return 'cannot travel that far';
    }
}