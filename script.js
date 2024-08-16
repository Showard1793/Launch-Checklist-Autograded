// Write your JavaScript code here!
    
// RUN FORM SUBMISSION AND PLANET TRAVEL +++
window.addEventListener("load", function() {

    (async function() {
        const planets = await myFetch();
        const selectedPlanet = pickPlanet(planets);

        addDestinationInfo(
            document,
            selectedPlanet.name,
            selectedPlanet.diameter,
            selectedPlanet.star,
            selectedPlanet.distance,
            selectedPlanet.moons,
            selectedPlanet.image,           
        );
    })();

    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

    // Get values from the form +++
        let pilotName = document.querySelector("input[name='pilotName']").value;
        let copilotName = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoMass = document.querySelector("input[name='cargoMass']").value;
        let list = document.querySelector("list");

    // Call formSubmission with these values
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
              
        
});
});


    
 