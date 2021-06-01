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

//declare elements from html
const stateDropdown = document.getElementById("stateList");
const cityDropdown = document.getElementById("cityList");

window.onload = function() {
    displayState(cityStates);

    //add onchange listener for when there is a change in state drop down
    stateDropdown.onchange = displayCities;
}

function displayState(arr) {
    let theOption = new Option("Select one...", "");
    stateDropdown.appendChild(theOption);
    // cityDropdown.appendChild(theOption)

    let cityOption = new Option("Select a state first...", "")
    cityDropdown.appendChild(cityOption)

    // let theOption = new Option(arr[0].state, arr[0].stateAbbr)

    for (let i = 0; i < arr.length; i++) {
        theOption = new Option(arr[i].state, arr[i].stateAbbr);
        stateDropdown.appendChild(theOption);
    }
}

function displayCities() {    
    //if there are any cities from previous load, remove them all
    while (cityDropdown.firstChild) {
        cityDropdown.removeChild(cityDropdown.firstChild);
    }
    //find the reference to the dropdown 
    let selectedState = stateDropdown.value;

    //if the seleted one is the first option for Select One; display alert to select an actual state
    if (selectedState === "") {
        alert("Please select a state to see its cities!");
        return;
    }

    // find the state object that was seletec
    let foundState = cityStates.find(data => data.stateAbbr === selectedState);

    let theOption = new Option("Select one...", "");
    cityDropdown.appendChild(theOption);

    // loop through the cities of the found state selected
    for (let i = 0; i < foundState.cities.length; i++) {
        let cityOptions = new Option(foundState.cities[i], foundState.cities[i]);
        cityDropdown.appendChild(cityOptions);
    }
}