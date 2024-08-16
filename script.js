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
    console.log("test");
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
              
    //Display Random Planet Data
        
});
});

//OLD SUBMIT FORM
   //this.window.addEventListener("submit", formSubmission())

    /* let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    }) */
    
 