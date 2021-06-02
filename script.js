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
const info = document.getElementById("info")

// different way to find the state and store it globally
// let selectedState = null

window.onload = function() {
    displayState(cityStates);

    //add onchange listener for when there is a change in state drop down
    stateDropdown.onchange = displayCities;
    
    //add onchange listener for when city is selected
    cityDropdown.onchange = displayInfo;
}

// load all the states into statedropdown
function displayState(arr) {
    info.innerHTML = ""
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

//load cities into citydropdown
function displayCities() {    
    //if there are any cities from previous load, remove them all

    // while (cityDropdown.firstChild) {
    //     cityDropdown.removeChild(cityDropdown.firstChild);
    // }
    info.innerHTML = ""
    cityDropdown.options.length = 0

    //find the reference to the dropdown 
    let selectedState = stateDropdown.value;

    //if the seleted one is the first option for Select One; display alert to select an actual state
    if (selectedState === "") {
        // alert("Please select a state to see its cities!");
        let cityOption = new Option("Select a state first...", "")
        cityDropdown.appendChild(cityOption)
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

// show info when city is picked
function displayInfo() {
    //erase any previous messages
    info.innerHTML = ""

    //get the selected state
    let selectedCity = cityDropdown.value
    //find the state
    // let foundState = cityStates.find(state => state.stateAbbr === selectedState)

    if (selectedCity === "") {
        return
    }

    //get selected state
    let selectedStateIndex = stateDropdown.selectedIndex;
    console.log(selectedStateIndex);
    let selectedState = stateDropdown.options[selectedStateIndex].text
    console.log(selectedState);

    //build message
    let message = "<span>State:</span> " + selectedState + "<br>" + "<span>City:</span> " + selectedCity
    info.innerHTML = message
}