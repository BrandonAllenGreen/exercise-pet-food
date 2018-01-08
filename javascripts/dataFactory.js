"use strict";
let dogs;
// load dog.json

function loadDogs(callback) {
  $.ajax({
    url: "data/dog.json"
  }).done( (dogData) => {
    dogs = dogData.dog_brands;
    callback(dogs);
    //console.log('doggies', dogData);
  }).fail( (error) => {
    console.log('failed to load', error.statusText);
  });
}



module.exports = { loadDogs };