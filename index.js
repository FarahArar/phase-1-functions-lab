// Code your solution in this file!

let feetPerBlock=264;
function distanceFromHqInBlocks(location){
    let headquartersLocation=42;
    return Math.abs(location-headquartersLocation);

}

function distanceFromHqInFeet(pickup){
    let blocks = distanceFromHqInBlocks(pickup);
    return blocks*feetPerBlock;

}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)* feetPerBlock;


}

function calculatesFarePrice(start, destination) {
    let distance=distanceTravelledInFeet(start,destination);

    if (distance<= 400) {
      return 0; 
    } else if(distance>400&&distance<= 2000) {
      return 0.02 *(distance-400); 
    } else if(distance > 2000 && distance < 2500) {
      return 25; 
    } else if(distance >=2500) {
      return "cannot travel that far"; 
    }
  }


