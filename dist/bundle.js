(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";

const petFood = require("./dataFactory");

// format dog food objects
function formatDogs(dogs) {
  console.log(dogs);
  

}

petFood.loadDogs(formatDogs);
},{"./dataFactory":1}],3:[function(require,module,exports){
"use strict";
},{}]},{},[1,2,3]);
