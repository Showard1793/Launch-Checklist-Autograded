// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 

 //MAKE VALIDATE INPUT FUNCTION +++
 function validateInput(input) {
    input = input.trim(); // Remove any extra spaces

    if (input === "") {
        return "Empty"; // Case 1: Input is an empty string
    } else if (isNaN(parseFloat(input))) {
        // Case 2: Input cannot be converted to a number
        return "Not a Number";
    } else if (!isNaN(parseFloat(input))) {
        // Case 3: Input is a string that represents a number
        return "Is a Number";
    } else {
        return "Invalid";
    }
}

//MAKE FORM SUBMISSION FUNCTION+++
 
function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
    // Validate inputs
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoMass);

    //Create JS variables
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");

    if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty") {
        alert("All fields are required.");
        return;
    }

    if (pilotStatus === "Is a Number" || copilotStatus === "Is a Number") {
        alert("Pilot and Co-pilot names must be strings.");
        return;
    }

    if (fuelStatus === "Not a Number" || cargoStatus === "Not a Number") {
        alert("Fuel level and cargo mass must be numbers.");
        return;
    }

   //CHECK FUEL LEVEL AND CARGOMASS BEFORE LAUNCH

    if (fuelLevel < 10000) {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`;
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

    } else if (cargoMass > 10000) {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch.";
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        
    } else{
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }
}
 




 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;