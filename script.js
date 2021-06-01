"use strict"
const cityStates = [{
        state: "California",
        stateAbbr: "CA",
        cities: ["Los Angeles", "San Francisco", "San Diego"]
    },
    {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
    },
    {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Austin", "Dallas", "Houston", "San Antonio"]
    }
];

const stateDropdown = document.getElementById("stateList");
const cityDropdown = document.getElementById("cityList");

window.onload = function() {
    displayState(cityStates);

    stateDropdown.onchange = displayCities;
}

function displayState(arr) {
    let theOption = new Option("Select one...", "");
    stateDropdown.appendChild(theOption);

    // let theOption = new Option(arr[0].state, arr[0].stateAbbr)

    for (let i = 0; i < arr.length; i++) {
        theOption = new Option(arr[i].state, arr[i].stateAbbr);
        stateDropdown.appendChild(theOption);
    }
}

function displayCities() {    
    
    while (cityDropdown.firstChild) {
        cityDropdown.removeChild(cityDropdown.firstChild);
    }
    let selectedState = stateDropdown.value;

    if (selectedState === "") {
        alert("Please select a state to see its cities!");
        return;
    }

    // console.log(selectedState)

    let foundState = cityStates.find(data => data.stateAbbr === selectedState);


    for (let i = 0; i < foundState.cities.length; i++) {
        let cityOptions = new Option(foundState.cities[i], foundState.cities[i]);
        cityDropdown.appendChild(cityOptions);
    }
}