// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");
    
//TESTING OUT NEW SUBMIT FORM
 window.addEventListener("load", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get values from the form
        let pilotName = document.querySelector("input[name='pilotName']").value;
        let copilotName = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoMass = document.querySelector("input[name='cargoMass']").value;

        // Call formSubmission with these values
        formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
    });
});     

//OLD SUBMIT FORM
   //this.window.addEventListener("submit", formSubmission())

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 