// Write your helper functions here!

require('cross-fetch/polyfill');

// MAKE VALIDATE INPUT FUNCTION+++

function validateInput(input) {
    
    if (input === "") {
        return "Empty"; 
    } else if (isNaN((input))) {
        return "Not a Number";
    } else if (!isNaN((input))) {
        return "Is a Number";
    } else {
        return "Invalid";
    }
}

// MAKE FORM SUBMISSION FUNCTION

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    //Create JS variables
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    

    // Validate inputs
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoMass);

//SEND ALERTS IF INVALID

    let DataAllValid = true;

        if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty") {
            alert("All fields are required.");
            DataAllValid = false;
        }

        if (pilotStatus === "Is a Number" || copilotStatus === "Is a Number") {
            alert("Pilot and Co-pilot names must be strings.");
            DataAllValid = false;
        }        

        if (fuelStatus === "Not a Number" || cargoStatus === "Not a Number") {
            alert("Fuel level and cargo mass must be numbers.");
            DataAllValid = false;
        }    

              
//CHECK FUEL LEVEL AND CARGOMASS AND UPDATE STATUS IF VALID

        if (DataAllValid && (fuelLevel < 10000 && cargoMass > 10000)) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";

        } else if (DataAllValid && (fuelLevel >= 10000 && cargoMass > 10000)) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";

        } else if (DataAllValid && (fuelLevel < 10000 && cargoMass <= 10000)) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";

        } else if (DataAllValid && (fuelLevel >= 10000 && cargoMass <= 10000)){
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }

}

          

//TASK 3: Planet Travel
            
    //Fetch Planet JSON +++
    
    async function myFetch() {
        const response = await fetch("https://handlers.education.launchcode.org/static/planets.json"); 
        const planetsReturned = await response.json();       
            return planetsReturned;
    }
                
    //Randomly Select Planet +++
            
    function pickPlanet(planets) {
        const randomIndex = Math.floor(Math.random() * planets.length);
            return planets[randomIndex];
    }
                
    //Add Destination Info           
    
    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        const missionTargetDiv = document.getElementById("missionTarget");
        
        missionTargetDiv.innerHTML = `
                    
                    <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                    </ol>
                    <img src="${imageUrl}">
                `;
    }

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;